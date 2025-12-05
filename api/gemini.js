export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    res.status(500).json({ error: 'GEMINI_API_KEY not configured on server' });
    return;
  }

  let body = req.body;
  try {
    if (!body || Object.keys(body).length === 0) {
      body = await (async () => {
        try { return await req.json(); } catch { return {}; }
      })();
    }
  } catch (e) {
    // ignore
  }

  const { model, contents } = body || {};
  if (!model || !contents) {
    res.status(400).json({ error: 'Missing model or contents in request body' });
    return;
  }

  const modelName = model.startsWith('models/') ? model : `models/${model}`;
  const endpoints = ['generateContent', 'generateText', 'generateMessage'];

  for (const endpoint of endpoints) {
    const url = `https://generativelanguage.googleapis.com/v1/${modelName}:${endpoint}?key=${key}`;
    const payload = {
      contents,
      generationConfig: {
        temperature: 0.6,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
      },
    };

    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        // try next endpoint
        continue;
      }

      const data = await resp.json();
      const text =
        data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') ||
        data?.outputs?.map((o) => o.text).join('') ||
        data?.content?.text ||
        data?.response?.text ||
        '';

      res.status(200).json({ text });
      return;
    } catch (err) {
      // try next endpoint
      continue;
    }
  }

  res.status(502).json({ error: 'No response from Gemini service' });
}
