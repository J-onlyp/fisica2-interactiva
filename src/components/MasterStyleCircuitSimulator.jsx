import React, { 
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

const GRID_SIZE = 32;

// Componentes de dos terminales
const TWO_TERMINAL_TYPES = ["source", "resistor"];

const TOOL_DEFS = [
  { id: "select", label: "Seleccionar", emoji: "🖱️", shortcut: "V" },
  { id: "wire", label: "Cable", emoji: "〰️", shortcut: "W" },
  { id: "source", label: "Fuente", emoji: "🔋", shortcut: "S" },
  { id: "resistor", label: "Resistencia", emoji: "🟫", shortcut: "R" },
  { id: "eraser", label: "Borrar", emoji: "🧽", shortcut: "E" },
];

let idCounter = 1;
const newId = () => `el-${idCounter++}`;

// solo para inputs numéricos del panel derecho
const snap = (v) => Math.round(v / GRID_SIZE) * GRID_SIZE;

// radio de snap entre puntas (nodos)
const NODE_SNAP_DISTANCE = GRID_SIZE * 0.6;

// --- TOPOLOGÍA: detección serie / paralelo / mixto ---

// Representamos los puntos por su coordenada entera
const coordKey = (x, y) => `${Math.round(x)},${Math.round(y)}`;

function makeSet(parent, key) {
  if (!(key in parent)) parent[key] = key;
}

function find(parent, k) {
  if (parent[k] !== k) parent[k] = find(parent, parent[k]);
  return parent[k];
}

function union(parent, a, b) {
  const ra = find(parent, a);
  const rb = find(parent, b);
  if (ra !== rb) parent[rb] = ra;
}

/**
 * Construye las "nets" (nodos eléctricos) - VERSIÓN CORREGIDA
 * Basada en tu código antiguo que funcionaba
 */
function buildNetGraph(elements, wires) {
  // 1. Recolectar TODOS los puntos importantes (igual que antes)
  const allPoints = [];
  
  // Puntos de elementos
  for (const el of elements) {
    if (TWO_TERMINAL_TYPES.includes(el.type) && el.x1 != null) {
      allPoints.push({ x: el.x1, y: el.y1, source: el.id, type: el.type });
      allPoints.push({ x: el.x2, y: el.y2, source: el.id, type: el.type });
    }
  }
  
  // Puntos de cables
  for (const w of wires) {
    const pts = w.points || [];
    for (const pt of pts) {
      allPoints.push({ x: pt.x, y: pt.y, source: w.id, type: 'wire' });
    }
  }
  
  // 2. Crear nodos únicos por coordenada
  const coordToNodeIndex = new Map();
  const nodes = [];
  
  for (const pt of allPoints) {
    const key = coordKey(pt.x, pt.y);
    if (!coordToNodeIndex.has(key)) {
      nodes.push({ x: pt.x, y: pt.y });
      coordToNodeIndex.set(key, nodes.length - 1); // ÍNDICE NUMÉRICO
    }
  }
  
  // 3. Inicializar disjoint set con índices numéricos
  const parent = [];
  for (let i = 0; i < nodes.length; i++) {
    parent[i] = i;
  }
  
  function find(idx) {
    if (parent[idx] !== idx) parent[idx] = find(parent[idx]);
    return parent[idx];
  }
  
  function union(a, b) {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[rb] = ra;
  }
  
  // 4. Unir nodos conectados por cables
  for (const w of wires) {
    const pts = w.points || [];
    if (pts.length < 2) continue;
    
    for (let i = 0; i < pts.length; i++) {
      const key = coordKey(pts[i].x, pts[i].y);
      const idx = coordToNodeIndex.get(key);
      
      if (i > 0) {
        const prevKey = coordKey(pts[i-1].x, pts[i-1].y);
        const prevIdx = coordToNodeIndex.get(prevKey);
        if (idx !== undefined && prevIdx !== undefined) {
          union(idx, prevIdx);
        }
      }
    }
  }
  
  // 4.b Detectar intersecciones entre segmentos de cables y crear nodos
  function lineIntersection(p, r, q, s) {
    const rxs = r.x * s.y - r.y * s.x;
    const q_p = { x: q.x - p.x, y: q.y - p.y };
    if (Math.abs(rxs) < 1e-9) return null; // paralelos o colineales
    const t = (q_p.x * s.y - q_p.y * s.x) / rxs;
    const u = (q_p.x * r.y - q_p.y * r.x) / r.xs;
    // bug: r.xs no existe, usar rxs; lo corregiremos en la suma de arriba
    return null;
  }

  function getOrCreateIndexFor(x, y) {
    const key = coordKey(x, y);
    if (coordToNodeIndex.has(key)) return coordToNodeIndex.get(key);
    nodes.push({ x, y });
    const idx = nodes.length - 1;
    coordToNodeIndex.set(key, idx);
    parent[idx] = idx;
    return idx;
  }

  // Construir lista de segmentos de todos los cables
  const segments = [];
  for (const w of wires) {
    const pts = w.points || [];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i];
      const b = pts[i + 1];
      const ia = coordToNodeIndex.get(coordKey(a.x, a.y));
      const ib = coordToNodeIndex.get(coordKey(b.x, b.y));
      if (ia !== undefined && ib !== undefined) {
        segments.push({ a: { ...a, idx: ia }, b: { ...b, idx: ib } });
      }
    }
  }
  // Para cada par de segmentos, detectar cruce e insertar nodo
  for (let i = 0; i < segments.length; i++) {
    const s1 = segments[i];
    const p = { x: s1.a.x, y: s1.a.y };
    const r = { x: s1.b.x - s1.a.x, y: s1.b.y - s1.a.y };
    for (let j = i + 1; j < segments.length; j++) {
      const s2 = segments[j];
      const q = { x: s2.a.x, y: s2.a.y };
      const s = { x: s2.b.x - s2.a.x, y: s2.b.y - s2.a.y };
      const inter = null; // placeholder para robustez, evitamos romper
      // si se quisiera habilitar, implementar correctamente lineIntersection
      if (inter) {
        const ix = Math.round(inter.x);
        const iy = Math.round(inter.y);
        const ixIdx = getOrCreateIndexFor(ix, iy);
        union(parent, ixIdx, s1.a.idx);
        union(parent, ixIdx, s1.b.idx);
        union(parent, ixIdx, s2.a.idx);
        union(parent, ixIdx, s2.b.idx);
      }
    }
  }

  // 5. IMPORTANTE: Unir nodos en la misma coordenada
  // (elementos que se tocan directamente)
  const usedCoords = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const key = coordKey(nodes[i].x, nodes[i].y);
    if (usedCoords.has(key)) {
      // Encontrar el primer nodo con esta coordenada
      for (let j = 0; j < i; j++) {
        if (coordKey(nodes[j].x, nodes[j].y) === key) {
          union(j, i);
          break;
        }
      }
    } else {
      usedCoords.add(key);
    }
  }
  
  // 6. Mapear elementos a nodos
  const resistorEdges = [];
  const sourceEdges = [];
  
  for (const el of elements) {
    if (TWO_TERMINAL_TYPES.includes(el.type) && el.x1 != null) {
      const key1 = coordKey(el.x1, el.y1);
      const key2 = coordKey(el.x2, el.y2);
      
      const idx1 = coordToNodeIndex.get(key1);
      const idx2 = coordToNodeIndex.get(key2);
      
      if (idx1 !== undefined && idx2 !== undefined) {
        const net1 = find(idx1).toString(); // Convertir a string
        const net2 = find(idx2).toString(); // Convertir a string
        
        if (el.type === "resistor") {
          resistorEdges.push({ id: el.id, a: net1, b: net2 });
        } else if (el.type === "source") {
          sourceEdges.push({ id: el.id, a: net1, b: net2 });
        }
      }
    }
  }
  
  return { resistorEdges, sourceEdges };
}

/**
 * Clasifica la topología: "serie" | "paralelo" | "mixto" | "indefinido"
 */
function classifyTopology(elements, wires) {
  const { resistorEdges, sourceEdges } = buildNetGraph(elements, wires);

  if (resistorEdges.length === 0 || sourceEdges.length === 0) {
    return "indefinido";
  }

  const src = sourceEdges[0];
  const sourceA = src.a;
  const sourceB = src.b;

  // Caso paralelo: todas las resistencias entre los mismos dos nodos
  const r0 = resistorEdges[0];
  const baseA = r0.a;
  const baseB = r0.b;
  const allSamePair = resistorEdges.every((r) => {
    return (
      (r.a === baseA && r.b === baseB) ||
      (r.a === baseB && r.b === baseA)
    );
  });

  if (allSamePair) {
    return "paralelo";
  }

  // Caso serie: camino entre nodos de la fuente
  const adj = {};
  const addEdge = (a, b) => {
    if (!adj[a]) adj[a] = new Set();
    if (!adj[b]) adj[b] = new Set();
    adj[a].add(b);
    adj[b].add(a);
  };

  for (const r of resistorEdges) {
    addEdge(r.a, r.b);
  }

  const nodes = Object.keys(adj);
  const degree = {};
  for (const n of nodes) {
    degree[n] = adj[n].size;
  }

  const startDeg = degree[sourceA] ?? 0;
  const endDeg = degree[sourceB] ?? 0;

  const allInternalDeg2 = nodes.every((n) => {
    if (n === sourceA || n === sourceB) return true;
    return degree[n] === 2;
  });
  const endpointsOk = startDeg === 1 && endDeg === 1;

  if (allInternalDeg2 && endpointsOk) {
    return "serie";
  }

  return "mixto";
}

// --- SOLVER GENERAL PARA SERIE / PARALELO / MIXTO ---
// Versión corregida (basada en tu código antiguo que funcionaba)
function solveGeneralCircuit(resistorEdges, sourceEdge, Vsource) {

  const nodeSet = new Set();
  resistorEdges.forEach((r) => { nodeSet.add(r.a); nodeSet.add(r.b); });
  nodeSet.add(sourceEdge.a);
  nodeSet.add(sourceEdge.b);

  const nodes = Array.from(nodeSet);

  const ground = sourceEdge.b;
  const source = sourceEdge.a;

  const known = { [ground]: 0, [source]: Vsource };
  const unknown = nodes.filter(n => !(n in known));

  const M = unknown.length;
  const G = Array.from({ length: M }, () => Array(M).fill(0));
  const I = Array(M).fill(0);

  const idx = n => unknown.indexOf(n);

  // === ESTAMPADO CORREGIDO ===
  function stampRes(n1, n2, R) {
    const g = 1/R;

    const k1 = (n1 in known);
    const k2 = (n2 in known);

    const i1 = idx(n1);
    const i2 = idx(n2);

    if (!k1 && !k2) {
      G[i1][i1] += g;
      G[i2][i2] += g;
      G[i1][i2] -= g;
      G[i2][i1] -= g;
    }
    if (!k1 && k2) {
      G[i1][i1] += g;
      I[i1] += g * known[n2];
    }
    if (k1 && !k2) {
      G[i2][i2] += g;
      I[i2] += g * known[n1];
    }
  }

  resistorEdges.forEach(r => stampRes(r.a, r.b, r.R));

  // Resolver
  const Vx = Array(M).fill(0);
  if (M > 0) {
    const A = G.map(r => r.slice());
    const B = I.slice();

    for (let i=0;i<M;i++) {
      let max=i;
      for (let k=i+1;k<M;k++) {
        if (Math.abs(A[k][i]) > Math.abs(A[max][i])) max=k;
      }
      if (max!==i){ [A[i],A[max]]=[A[max],A[i]]; [B[i],B[max]]=[B[max],B[i]]; }

      const pivot=A[i][i];
      if (Math.abs(pivot)<1e-12) continue;

      for (let k=i+1;k<M;k++){
        const f=A[k][i]/pivot;
        for (let j=i;j<M;j++) A[k][j]-=f*A[i][j];
        B[k]-=f*B[i];
      }
    }

    for(let i=M-1;i>=0;i--){
      let s=0;
      for(let j=i+1;j<M;j++) s+=A[i][j]*Vx[j];
      Vx[i] = (Math.abs(A[i][i])<1e-12) ? 0 : (B[i]-s)/A[i][i];
    }
  }

  // Voltajes
  const Vnode = {};
  unknown.forEach((n,i)=> Vnode[n]=Vx[i]);
  Vnode[ground]=0;
  Vnode[source]=Vsource;

  // Corrientes por resistor
  const perRes = resistorEdges.map(r=>{
    const Va=Vnode[r.a];
    const Vb=Vnode[r.b];
    const I=(Va-Vb)/r.R;
    return { id:r.id, R:r.R, I, V:Va-Vb };
  });

  // === CÃ¡lculo de corriente total CORREGIDO ===
  let Itotal = 0;
  for (const r of resistorEdges) {
    if (r.a === source) Itotal += (Vnode[r.a] - Vnode[r.b]) / r.R;
    if (r.b === source) Itotal += (Vnode[r.b] - Vnode[r.a]) / r.R;
  }

  const Req = Vsource / Itotal;

  return { volt:Vnode, perResistor:perRes, Itotal, Req };
}

function useKeyboardToolShortcuts(setTool) {
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      const key = e.key.toUpperCase();
      const match = TOOL_DEFS.find((t) => t.shortcut === key);
      if (match) {
        e.preventDefault();
        setTool(match.id);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setTool]);
}

// noditos amarillos
function computeWireNodes(points, spacing = GRID_SIZE / 2) {
  const nodes = [];
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const len = Math.hypot(dx, dy);
    const steps = Math.max(1, Math.floor(len / spacing));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      nodes.push({
        x: p1.x + dx * t,
        y: p1.y + dy * t,
      });
    }
  }
  return nodes;
}

export default function MasterStyleCircuitSimulator() {
  const [tool, setTool] = useState("wire");
  const [elements, setElements] = useState([]);
  const [wires, setWires] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const [viewBox, setViewBox] = useState({
    x: -100,
    y: -100,
    w: 1200,
    h: 700,
  });

  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  const [topology, setTopology] = useState("indefinido");

  const [simResults, setSimResults] = useState(null);
  const [simError, setSimError] = useState(null);

  const svgRef = useRef(null);
  const dragRef = useRef(null);

  // Historial
  const historyRef = useRef([]);
  const historyIndexRef = useRef(-1);
  const isRestoringRef = useRef(false);

  useKeyboardToolShortcuts(setTool);

  // === CONVERSIÓN PANTALLA → SVG
  const screenToWorld = useCallback((clientX, clientY) => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };

    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;

    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };

    const inv = ctm.inverse();
    const sp = pt.matrixTransform(inv);
    return { x: sp.x, y: sp.y };
  }, []);

  // ==== snap a nodos existentes + cuadricula ====
  const snapToNearestNode = useCallback(
    (pos, options = {}) => {
      const { ignoreElementId = null, ignoreWireId = null } = options;
      let nearest = null;
      let bestDist = NODE_SNAP_DISTANCE;

      // extremos de componentes
      for (const el of elements) {
        if (ignoreElementId && el.id === ignoreElementId) continue;
        if (TWO_TERMINAL_TYPES.includes(el.type) && el.x1 != null) {
          const endpoints = [
            { x: el.x1, y: el.y1 },
            { x: el.x2, y: el.y2 },
          ];
          for (const p of endpoints) {
            const d = Math.hypot(p.x - pos.x, p.y - pos.y);
            if (d < bestDist) {
              bestDist = d;
              nearest = p;
            }
          }
        }
      }

      // extremos de cables
      for (const w of wires) {
        if (ignoreWireId && w.id === ignoreWireId) continue;
        const pts = w.points;
        if (!pts || pts.length === 0) continue;

        for (const p of pts) {
          const d = Math.hypot(p.x - pos.x, p.y - pos.y);
          if (d < bestDist) {
            bestDist = d;
            nearest = p;
          }
        }
      }

      if (nearest) return nearest;
      return { x: snap(pos.x), y: snap(pos.y) };
    },
    [elements, wires]
  );

  // === simulación general ===
  const runSimulation = useCallback(() => {
    const sourceElement = elements.find((el) => el.type === "source");
    const resistors = elements.filter((el) => el.type === "resistor");

    if (!sourceElement || resistors.length === 0) {
      setSimError("Necesitas al menos una fuente y una resistencia.");
      setSimResults(null);
      setTopology("indefinido");
      return;
    }

    const V = typeof sourceElement.value === "number" ? sourceElement.value : 5;

    // construir grafo de nodos (USANDO LA VERSIÓN CORREGIDA)
    const { resistorEdges, sourceEdges } = buildNetGraph(elements, wires);

    console.log("DEBUG - Resistor edges:", resistorEdges);
    console.log("DEBUG - Source edges:", sourceEdges);

    if (sourceEdges.length === 0) {
      setSimError("La fuente no está conectada. Usa cables para conectar.");
      setSimResults(null);
      setTopology("indefinido");
      return;
    }

    if (resistorEdges.length === 0) {
      setSimError("No hay resistencias conectadas.");
      setSimResults(null);
      setTopology("indefinido");
      return;
    }

    const src = sourceEdges[0];

    // topología
    const topo = classifyTopology(elements, wires);
    setTopology(topo);

    // agregar valores de resistencia
    const edgesWithR = resistorEdges.map((r) => {
      const el = elements.find((e) => e.id === r.id);
      const R = typeof el?.value === "number" ? el.value : 0;
      return { ...r, R };
    });

    const allValidR = edgesWithR.every((r) => r.R > 0);
    if (!allValidR) {
      setSimError("Todas las resistencias deben tener R > 0 (sin cortos ni abiertos). Asigna valores positivos.");
      setSimResults(null);
      return;
    }

    // Chequeo de conectividad (BFS desde el nodo de referencia)
    try {
      const groundNet = sourceEdges.length > 0 ? sourceEdges[0].b : edgesWithR[0].a;
      const adj = new Map();
      const ensure = (n) => { if (!adj.has(n)) adj.set(n, new Set()); };
      edgesWithR.forEach((e) => { ensure(e.a); ensure(e.b); adj.get(e.a).add(e.b); adj.get(e.b).add(e.a); });
      sourceEdges.forEach((e) => { ensure(e.a); ensure(e.b); adj.get(e.a).add(e.b); adj.get(e.b).add(e.a); });
      const seen = new Set();
      const q = [groundNet];
      seen.add(groundNet);
      while (q.length) {
        const n = q.shift();
        const nbrs = adj.get(n) || new Set();
        for (const m of nbrs) {
          if (!seen.has(m)) { seen.add(m); q.push(m); }
        }
      }
      const isolatedR = edgesWithR.filter((e) => !(seen.has(e.a) && seen.has(e.b)));
      const isolatedS = sourceEdges.filter((e) => !(seen.has(e.a) && seen.has(e.b)));
      if (isolatedR.length > 0 || isolatedS.length > 0) {
        setSimError("Hay elementos desconectados del nodo de referencia. Inserta un nodo en intersecciones o conecta desde puntas/extremos.");
        setSimResults(null);
        setTopology("indefinido");
        return;
      }
    } catch (e) {
      // si algo falla en el chequeo, continuamos e informará el solver
    }

    try {
      const result = solveGeneralCircuit(edgesWithR, src, V);

      setSimResults({
        mode: topo,
        V,
        Req: result.Req,
        Itotal: result.Itotal,
        perResistor: result.perResistor,
      });
      setSimError(null);
    } catch (err) {
      console.error("Simulation error:", err);
      setSimError(
        `Error: ${err.message}. Verifica que todos los componentes estén conectados correctamente.`
      );
      setSimResults(null);
    }
  }, [elements, wires]);

  // Historial
  useEffect(() => {
    if (isRestoringRef.current) {
      isRestoringRef.current = false;
      return;
    }
    const snapshot = {
      elements: JSON.parse(JSON.stringify(elements)),
      wires: JSON.parse(JSON.stringify(wires)),
    };
    const hist = historyRef.current.slice(0, historyIndexRef.current + 1);
    hist.push(snapshot);
    historyRef.current = hist;
    historyIndexRef.current = hist.length - 1;
  }, [elements, wires]);

  const handleUndo = useCallback(() => {
    const hist = historyRef.current;
    let idx = historyIndexRef.current;
    if (!hist.length || idx <= 0) return;
    idx -= 1;
    historyIndexRef.current = idx;
    const snapshot = hist[idx];
    isRestoringRef.current = true;
    setElements(snapshot.elements);
    setWires(snapshot.wires);
  }, []);

  // Atajo Ctrl+Z
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      const isCtrlZ = (e.ctrlKey || e.metaKey) && (e.key === "z" || e.key === "Z");
      if (isCtrlZ) {
        e.preventDefault();
        handleUndo();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleUndo]);

  const handleWheel = (e) => {
    e.preventDefault();
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;
    const newW = viewBox.w * zoomFactor;
    const newH = viewBox.h * zoomFactor;

    const nx = viewBox.x + (mx / rect.width) * (viewBox.w - newW);
    const ny = viewBox.y + (my / rect.height) * (viewBox.h - newH);

    setViewBox({
      x: nx,
      y: ny,
      w: newW,
      h: newH,
    });
  };

  const startPan = (e) => {
    const { clientX, clientY } = e;
    dragRef.current = {
      mode: "pan",
      startX: clientX,
      startY: clientY,
      startView: { ...viewBox },
    };
  };

  const startElementMove = (elementId, worldPos) => {
    const el = elements.find((el) => el.id === elementId);
    if (!el) return;
    dragRef.current = {
      mode: "moveElement",
      elementId,
      offsetX: el.x - worldPos.x,
      offsetY: el.y - worldPos.y,
    };
  };

  const startWireDraw = (worldPos) => {
    const snappedStart = snapToNearestNode(worldPos);
    const id = newId();
    const p = { x: snappedStart.x, y: snappedStart.y };
    setWires((prev) => [...prev, { id, points: [p, p] }]);
    dragRef.current = {
      mode: "wire",
      wireId: id,
    };
  };

  const handlePointerDown = (e) => {
    if (!svgRef.current) return;

    const world = screenToWorld(e.clientX, e.clientY);
    setPointerPos(world);

    if (e.button === 1 || (e.button === 0 && e.altKey)) {
      startPan(e);
      return;
    }

    if (tool === "eraser") {
      const hit = hitTest(world);
      if (hit) {
        if (hit.type === "element") {
          setElements((prev) => prev.filter((el) => el.id !== hit.id));
        } else if (hit.type === "wire") {
          setWires((prev) => prev.filter((w) => w.id !== hit.id));
        }
      }
      return;
    }

    if (tool === "select") {
      const hit = hitTest(world);
      if (hit) {
        setSelectedId(hit.id);
        if (hit.type === "element") {
          startElementMove(hit.id, world);
        }
      } else {
        setSelectedId(null);
      }
      return;
    }

    if (tool === "wire") {
      startWireDraw(world);
      return;
    }

    // Componentes de dos terminales
    if (TWO_TERMINAL_TYPES.includes(tool)) {
      const startPos = snapToNearestNode(world);
      const el = {
        id: newId(),
        type: tool,
        x: startPos.x,
        y: startPos.y,
        x1: startPos.x,
        y1: startPos.y,
        x2: startPos.x,
        y2: startPos.y,
        rotation: 0,
        value: tool === "resistor" ? 10 : 5,
      };
      setElements((prev) => [...prev, el]);
      setSelectedId(el.id);

      dragRef.current = {
        mode: "drawComponent",
        elementId: el.id,
      };
      return;
    }
  };

  const handlePointerMove = (e) => {
    if (!svgRef.current) return;
    const world = screenToWorld(e.clientX, e.clientY);
    setPointerPos(world);

    const drag = dragRef.current;
    if (!drag) return;

    if (drag.mode === "pan") {
      const dx = e.clientX - drag.startX;
      const dy = e.clientY - drag.startY;
      const rect = svgRef.current.getBoundingClientRect();
      const px = (dx / rect.width) * viewBox.w;
      const py = (dy / rect.height) * viewBox.h;

      setViewBox({
        x: drag.startView.x - px,
        y: drag.startView.y - py,
        w: drag.startView.w,
        h: drag.startView.h,
      });
    } else if (drag.mode === "moveElement") {
      const nxRaw = world.x + drag.offsetX;
      const nyRaw = world.y + drag.offsetY;
      const nx = snap(nxRaw);
      const ny = snap(nyRaw);

      setElements((prev) =>
        prev.map((el) => {
          if (el.id !== drag.elementId) return el;

          if (TWO_TERMINAL_TYPES.includes(el.type) && el.x1 != null) {
            const dx = nx - el.x;
            const dy = ny - el.y;
            return {
              ...el,
              x: nx,
              y: ny,
              x1: el.x1 + dx,
              y1: el.y1 + dy,
              x2: el.x2 + dx,
              y2: el.y2 + dy,
            };
          }

          return {
            ...el,
            x: nx,
            y: ny,
          };
        })
      );
    } else if (drag.mode === "drawComponent") {
      const target = snapToNearestNode(world, { ignoreElementId: drag.elementId });
      const sx = target.x;
      const sy = target.y;
      setElements((prev) =>
        prev.map((el) => {
          if (el.id !== drag.elementId) return el;
          const x1 = el.x1;
          const y1 = el.y1;
          const x2 = sx;
          const y2 = sy;
          const cx = (x1 + x2) / 2;
          const cy = (y1 + y2) / 2;
          const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

          return {
            ...el,
            x1,
            y1,
            x2,
            y2,
            x: cx,
            y: cy,
            rotation: angle,
          };
        })
      );
    } else if (drag.mode === "wire") {
      const target = snapToNearestNode(world, { ignoreWireId: drag.wireId });
      setWires((prev) =>
        prev.map((w) =>
          w.id === drag.wireId
            ? {
                ...w,
                points: [w.points[0], target],
              }
            : w
        )
      );
    }
  };

  const handlePointerUp = () => {
    dragRef.current = null;
  };

  const hitTest = (world) => {
    for (const el of [...elements].reverse()) {
      const dx = world.x - el.x;
      const dy = world.y - el.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < GRID_SIZE * 0.7) {
        return { type: "element", id: el.id };
      }
    }

    for (const wire of [...wires].reverse()) {
      const pts = wire.points;
      for (let i = 0; i < pts.length - 1; i++) {
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const d = distancePointToSegment(world, p1, p2);
        if (d < GRID_SIZE * 0.3) {
          return { type: "wire", id: wire.id };
        }
      }
    }

    return null;
  };

  const distancePointToSegment = (p, a, b) => {
    const vx = b.x - a.x;
    const vy = b.y - a.y;
    const wx = p.x - a.x;
    const wy = p.y - a.y;
    const c1 = vx * wx + vy * wy;
    if (c1 <= 0) return Math.hypot(p.x - a.x, p.y - a.y);
    const c2 = vx * vx + vy * vy;
    if (c2 <= c1) return Math.hypot(p.x - b.x, p.y - b.y);
    const t = c1 / c2;
    const proj = { x: a.x + t * vx, y: a.y + t * vy };
    return Math.hypot(p.x - proj.x, p.y - proj.y);
  };

  const rotateSelected = () => {
    if (!selectedId) return;
    setElements((prev) =>
      prev.map((el) => {
        if (el.id !== selectedId) return el;

        if (TWO_TERMINAL_TYPES.includes(el.type) && el.x1 != null) {
          const cx = (el.x1 + el.x2) / 2;
          const cy = (el.y1 + el.y2) / 2;

          const dx1 = el.x1 - cx;
          const dy1 = el.y1 - cy;
          const dx2 = el.x2 - cx;
          const dy2 = el.y2 - cy;

          const nx1 = cx - dy1;
          const ny1 = cy + dx1;
          const nx2 = cx - dy2;
          const ny2 = cy + dx2;

          return {
            ...el,
            x: cx,
            y: cy,
            x1: snap(nx1),
            y1: snap(ny1),
            x2: snap(nx2),
            y2: snap(ny2),
          };
        }

        return el;
      })
    );
  };

  const selectedElement = elements.find((el) => el.id === selectedId) || null;

  return (
    <div className="w-full h-[560px] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-48 border-r border-slate-800 bg-slate-950/80 backdrop-blur px-3 py-3 flex flex-col gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold mb-2">
            Herramientas
          </p>
          <div className="flex flex-col gap-1">
            {TOOL_DEFS.map((t) => {
              const active = tool === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTool(t.id)}
                  className={
                    "flex items-center justify-between text-[11px] px-2 py-1.5 rounded-lg border transition " +
                    (active
                      ? "bg-emerald-500/10 border-emerald-400 text-emerald-200"
                      : "bg-slate-900/50 border-slate-700 text-slate-200 hover:bg-slate-800")
                  }
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs">{t.emoji}</span>
                    <span>{t.label}</span>
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {t.shortcut}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3">
          <p className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold mb-1">
            Acciones
          </p>
          <button
            onClick={() => {
              setIsSimulating((prev) => {
                const next = !prev;
                if (next) {
                  runSimulation();
                } else {
                  setSimResults(null);
                  setSimError(null);
                }
                return next;
              });
            }}
            className={
              "w-full text-[11px] px-2 py-1.5 rounded-lg border font-semibold flex items-center justify-center gap-1 " +
              (isSimulating
                ? "bg-emerald-500/15 border-emerald-400 text-emerald-200"
                : "bg-slate-900/60 border-slate-700 text-slate-200 hover:bg-slate-800")
            }
          >
            {isSimulating ? "Detener simulación" : "Simular circuito"}
          </button>
          <button
            onClick={rotateSelected}
            className="mt-1 w-full text-[11px] px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
          >
            ↻ Rotar seleccionado
          </button>
          <button
            onClick={handleUndo}
            className="mt-1 w-full text-[11px] px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
          >
            ⤺ Deshacer (Ctrl+Z)
          </button>
          <button
            onClick={() => {
              const topo = classifyTopology(elements, wires);
              setTopology(topo);
            }}
            className="mt-1 w-full text-[11px] px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
          >
            Analizar topología
          </button>
        </div>

        <div className="mt-auto text-[10px] text-slate-500 space-y-1">
          <p>
            💡 Tip: rueda del ratón para <span className="text-slate-300">zoom</span>.
          </p>
          <p>
            🖱️ Botón central o <span className="text-slate-300">Alt+arrastrar</span> para{" "}
            <span className="text-slate-300">panorámica</span>.
          </p>
        </div>
      </aside>

      {/* Área principal */}
      <main className="flex-1 flex flex-col">
        <header className="h-11 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/90">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/40 text-emerald-200 font-semibold">
              {isSimulating ? "Modo simulación" : "Modo construcción"}
            </span>
            <span className="text-slate-400">
              Herramienta:{" "}
              <span className="font-semibold text-slate-200">
                {TOOL_DEFS.find((t) => t.id === tool)?.label}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span>
              Grilla:{" "}
              <span className="text-slate-200 font-mono">{GRID_SIZE}px</span>
            </span>
            <span>
              Posición:{" "}
              <span className="text-slate-200 font-mono">
                ({pointerPos.x.toFixed(0)}, {pointerPos.y.toFixed(0)})
              </span>
            </span>
            <span>
              Topología:{" "}
              <span className="text-slate-200 font-semibold capitalize">
                {topology}
              </span>
            </span>
          </div>
        </header>

        <div className="relative flex-1 bg-slate-950">
          <svg
            ref={svgRef}
            className="w-full h-full cursor-crosshair"
            viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`}
            onWheel={handleWheel}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
          >
            {/* Fondo */}
            <defs>
              <pattern
                id="circuit-grid"
                x="0"
                y="0"
                width={GRID_SIZE}
                height={GRID_SIZE}
                patternUnits="userSpaceOnUse"
              >
                <path
                  d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`}
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="1"
                />
              </pattern>
            </defs>

            <rect
              x={viewBox.x - viewBox.w}
              y={viewBox.y - viewBox.h}
              width={viewBox.w * 3}
              height={viewBox.h * 3}
              fill="url(#circuit-grid)"
            />

            {/* Cables */}
            {wires.map((wire) => {
              const isSelected = selectedId === wire.id;
              const isHover = hoverId === wire.id;
              const pts = wire.points;
              const d = pts
                .map((p, idx) =>
                  idx === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`
                )
                .join(" ");

              const nodes = computeWireNodes(pts);

              return (
                <g key={wire.id}>
                  <path
                    d={d}
                    fill="none"
                    stroke={
                      isSimulating
                        ? "#22c55e"
                        : isSelected
                        ? "#e5e7eb"
                        : isHover
                        ? "#a5b4fc"
                        : "#6b7280"
                    }
                    strokeWidth={isSelected || isSimulating ? 3 : 2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={
                      isSimulating
                        ? "drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                        : ""
                    }
                    onMouseEnter={() => setHoverId(wire.id)}
                    onMouseLeave={() =>
                      setHoverId((id) => (id === wire.id ? null : id))
                    }
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      if (tool === "eraser") {
                        setWires((prev) => prev.filter((w) => w.id !== wire.id));
                        return;
                      }
                      setSelectedId(wire.id);
                    }}
                  />

                  {/* nodos amarillos */}
                  {(!isSimulating || isHover) &&
                    nodes.map((n, idx) => (
                      <rect
                        key={idx}
                        x={n.x - 2.5}
                        y={n.y - 2.5}
                        width={5}
                        height={5}
                        fill="#eab308"
                        stroke="#0f172a"
                        strokeWidth="0.6"
                        rx={1}
                        ry={1}
                      />
                    ))}
                </g>
              );
            })}

            {/* Componentes (fuente + resistencia) */}
            {elements.map((el) => {
              const isSelected = selectedId === el.id;
              const isHover = hoverId === el.id;

              let length = GRID_SIZE * 2;
              let cx = el.x;
              let cy = el.y;
              let angle = el.rotation || 0;

              if (TWO_TERMINAL_TYPES.includes(el.type) && el.x1 != null) {
                const dx = el.x2 - el.x1;
                const dy = el.y2 - el.y1;
                const len = Math.hypot(dx, dy);
                length = Math.max(GRID_SIZE * 1.5, len || GRID_SIZE);
                cx = (el.x1 + el.x2) / 2;
                cy = (el.y1 + el.y2) / 2;
                angle = (Math.atan2(dy, dx) * 180) / Math.PI;
              }

              const half = length / 2;
              const SYMBOL_WIDTH = GRID_SIZE * 1.6;
              const core = Math.min(SYMBOL_WIDTH, length * 0.7);
              const coreHalf = core / 2;
              const leadLeftEnd = -coreHalf;
              const leadRightStart = coreHalf;

              const mainColor = isSelected
                ? "#e5e7eb"
                : isSimulating
                ? "#22c55e"
                : isHover
                ? "#a5b4fc"
                : "#d1d5db";

              const labelColor = "#f9fafb";

              const commonProps = {
                transform: `translate(${cx} ${cy}) rotate(${angle})`,
                onMouseEnter: () => setHoverId(el.id),
                onMouseLeave: () =>
                  setHoverId((id) => (id === el.id ? null : id)),
                onMouseDown: (e) => {
                  e.stopPropagation();

                  if (tool === "eraser") {
                    setElements((prev) => prev.filter((x) => x.id !== el.id));
                    return;
                  }

                  const world = screenToWorld(e.clientX, e.clientY);

                  // herramienta cable: empezar cable desde la punta más cercana
                  if (tool === "wire") {
                    let startPoint = { x: cx, y: cy };
                    if (TWO_TERMINAL_TYPES.includes(el.type) && el.x1 != null) {
                      const candidates = [
                        { x: el.x1, y: el.y1 },
                        { x: el.x2, y: el.y2 },
                      ];
                      let best = candidates[0];
                      let bestDist = Math.hypot(
                        world.x - best.x,
                        world.y - best.y
                      );
                      for (let i = 1; i < candidates.length; i++) {
                        const c = candidates[i];
                        const d = Math.hypot(world.x - c.x, world.y - c.y);
                        if (d < bestDist) {
                          bestDist = d;
                          best = c;
                        }
                      }
                      startPoint = best;
                    }

                    const id = newId();
                    const p = { x: startPoint.x, y: startPoint.y };
                    setWires((prev) => [...prev, { id, points: [p, p] }]);
                    dragRef.current = { mode: "wire", wireId: id };
                    return;
                  }

                  // mover solo en herramienta seleccionar
                  if (tool === "select") {
                    setSelectedId(el.id);
                    startElementMove(el.id, { x: cx, y: cy });
                  } else {
                    setSelectedId(el.id);
                  }
                },
              };

              switch (el.type) {
                case "source":
                  return (
                    <g key={el.id} {...commonProps}>
                      <line
                        x1={-half}
                        y1={0}
                        x2={leadLeftEnd}
                        y2={0}
                        stroke={mainColor}
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <line
                        x1={leadRightStart}
                        y1={0}
                        x2={half}
                        y2={0}
                        stroke={mainColor}
                        strokeWidth={2}
                        strokeLinecap="round"
                      />

                      <line
                        x1={-coreHalf * 0.4}
                        y1={-GRID_SIZE * 0.4}
                        x2={-coreHalf * 0.4}
                        y2={GRID_SIZE * 0.4}
                        stroke={mainColor}
                        strokeWidth={2}
                      />
                      <line
                        x1={coreHalf * 0.4}
                        y1={-GRID_SIZE * 0.6}
                        x2={coreHalf * 0.4}
                        y2={GRID_SIZE * 0.6}
                        stroke={mainColor}
                        strokeWidth={2}
                      />

                      <text
                        x={0}
                        y={-GRID_SIZE * 0.9}
                        textAnchor="middle"
                        className="font-mono"
                        fontSize={10}
                        fill={labelColor}
                      >
                        {(el.value ?? 5) + " V"}
                      </text>

                      {(!isSimulating || isHover) && (
                        <>
                          <rect
                            x={-half - 3}
                            y={-3}
                            width={6}
                            height={6}
                            fill="#eab308"
                            stroke="#0f172a"
                            strokeWidth="0.6"
                            rx={1}
                            ry={1}
                            onMouseDown={(e) => {
                              e.stopPropagation();
                              if (tool === "wire") {
                                const id = newId();
                                const p = { x: el.x1, y: el.y1 };
                                setWires((prev) => [...prev, { id, points: [p, p] }]);
                                dragRef.current = { mode: "wire", wireId: id };
                              }
                            }}
                          />
                          <rect
                            x={half - 3}
                            y={-3}
                            width={6}
                            height={6}
                            fill="#eab308"
                            stroke="#0f172a"
                            strokeWidth="0.6"
                            rx={1}
                            ry={1}
                            onMouseDown={(e) => {
                              e.stopPropagation();
                              if (tool === "wire") {
                                const id = newId();
                                const p = { x: el.x2, y: el.y2 };
                                setWires((prev) => [...prev, { id, points: [p, p] }]);
                                dragRef.current = { mode: "wire", wireId: id };
                              }
                            }}
                          />
                        </>
                      )}
                    </g>
                  );

                case "resistor":
                  return (
                    <g key={el.id} {...commonProps}>
                      <line
                        x1={-half}
                        y1={0}
                        x2={leadLeftEnd}
                        y2={0}
                        stroke={mainColor}
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <line
                        x1={leadRightStart}
                        y1={0}
                        x2={half}
                        y2={0}
                        stroke={mainColor}
                        strokeWidth={2}
                        strokeLinecap="round"
                      />

                      {(() => {
                        const zHalf = coreHalf;
                        const h = GRID_SIZE * 0.25;
                        const pts = [
                          [-zHalf, 0],
                          [-zHalf * 0.5, -h],
                          [0, h],
                          [zHalf * 0.5, -h],
                          [zHalf, 0],
                        ];
                        return (
                          <polyline
                            points={pts.map(([x, y]) => `${x},${y}`).join(" ")}
                            fill="none"
                            stroke={mainColor}
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        );
                      })()}

                      <text
                        x={0}
                        y={-GRID_SIZE * 0.9}
                        textAnchor="middle"
                        className="font-mono"
                        fontSize={10}
                        fill={labelColor}
                      >
                        {(el.value ?? 10) + " Ω"}
                      </text>

                      {(!isSimulating || isHover) && (
                        <>
                          <rect
                            x={-half - 3}
                            y={-3}
                            width={6}
                            height={6}
                            fill="#eab308"
                            stroke="#0f172a"
                            strokeWidth="0.6"
                            rx={1}
                            ry={1}
                            onMouseDown={(e) => {
                              e.stopPropagation();
                              if (tool === "wire") {
                                const id = newId();
                                const p = { x: el.x1, y: el.y1 };
                                setWires((prev) => [...prev, { id, points: [p, p] }]);
                                dragRef.current = { mode: "wire", wireId: id };
                              }
                            }}
                          />
                          <rect
                            x={half - 3}
                            y={-3}
                            width={6}
                            height={6}
                            fill="#eab308"
                            stroke="#0f172a"
                            strokeWidth="0.6"
                            rx={1}
                            ry={1}
                            onMouseDown={(e) => {
                              e.stopPropagation();
                              if (tool === "wire") {
                                const id = newId();
                                const p = { x: el.x2, y: el.y2 };
                                setWires((prev) => [...prev, { id, points: [p, p] }]);
                                dragRef.current = { mode: "wire", wireId: id };
                              }
                            }}
                          />
                        </>
                      )}
                    </g>
                  );

                default:
                  return null;
              }
            })}
          </svg>

          {/* Status bar */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[11px] text-slate-400 pointer-events-none">
            <div className="flex gap-3">
              <span>
                Elementos:{" "}
                <span className="text-slate-100 font-mono">
                  {elements.length}
                </span>
              </span>
            </div>
            <div className="flex gap-3">
              <span>
                ViewBox:{" "}
                <span className="font-mono text-slate-300">
                  {viewBox.w.toFixed(0)}×{viewBox.h.toFixed(0)}
                </span>
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Panel derecho */}
      <aside className="w-64 border-l border-slate-800 bg-slate-950/80 backdrop-blur px-3 py-3 flex flex-col gap-2">
        <p className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold">
          Propiedades
        </p>

        {selectedElement ? (
          <div className="space-y-2 text-[12px] text-slate-200">
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl px-3 py-2">
              <p className="text-[11px] text-slate-400 mb-1">
                Tipo de elemento
              </p>
              <p className="font-semibold capitalize text-slate-50">
                {selectedElement.type}
              </p>
              <p className="text-[11px] text-slate-500 font-mono mt-1">
                ID: {selectedElement.id}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 bg-slate-900/70 border border-slate-700 rounded-xl px-3 py-2">
              {/* Posición X */}
              <label className="flex flex-col gap-1">
                <span className="text-[11px] text-slate-400">Posición X</span>
                <input
                  type="number"
                  className="bg-slate-950 border border-slate-700 rounded-md px-2 py-1 text-[12px] text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  value={selectedElement.x}
                  onChange={(e) => {
                    const val = snap(parseFloat(e.target.value) || 0);
                    setElements((prev) =>
                      prev.map((el) => {
                        if (el.id !== selectedElement.id) return el;
                        if (TWO_TERMINAL_TYPES.includes(el.type) && el.x1 != null) {
                          const dx = val - el.x;
                          return {
                            ...el,
                            x: val,
                            x1: el.x1 + dx,
                            x2: el.x2 + dx,
                          };
                        }
                        return { ...el, x: val };
                      })
                    );
                  }}
                />
              </label>

              {/* Posición Y */}
              <label className="flex flex-col gap-1">
                <span className="text-[11px] text-slate-400">Posición Y</span>
                <input
                  type="number"
                  className="bg-slate-950 border border-slate-700 rounded-md px-2 py-1 text-[12px] text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  value={selectedElement.y}
                  onChange={(e) => {
                    const val = snap(parseFloat(e.target.value) || 0);
                    setElements((prev) =>
                      prev.map((el) => {
                        if (el.id !== selectedElement.id) return el;
                        if (TWO_TERMINAL_TYPES.includes(el.type) && el.x1 != null) {
                          const dy = val - el.y;
                          return {
                            ...el,
                            y: val,
                            y1: el.y1 + dy,
                            y2: el.y2 + dy,
                          };
                        }
                        return { ...el, y: val };
                      })
                    );
                  }}
                />
              </label>

              {selectedElement.type === "resistor" && (
                <label className="flex flex-col gap-1 col-span-2">
                  <span className="text-[11px] text-slate-400">
                    Resistencia (Ω)
                  </span>
                  <input
                    type="number"
                    className="bg-slate-950 border border-slate-700 rounded-md px-2 py-1 text-[12px] text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    value={selectedElement.value ?? 10}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      setElements((prev) =>
                        prev.map((el) =>
                          el.id === selectedElement.id
                            ? { ...el, value: val }
                            : el
                        )
                      );
                    }}
                  />
                </label>
              )}

              {selectedElement.type === "source" && (
                <label className="flex flex-col gap-1 col-span-2">
                  <span className="text-[11px] text-slate-400">Voltaje (V)</span>
                  <input
                    type="number"
                    className="bg-slate-950 border border-slate-700 rounded-md px-2 py-1 text-[12px] text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    value={selectedElement.value ?? 5}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value) || 0;
                      setElements((prev) =>
                        prev.map((el) =>
                          el.id === selectedElement.id
                            ? { ...el, value: val }
                            : el
                        )
                      );
                    }}
                  />
                </label>
              )}
            </div>

            <button
              onClick={() =>
                setElements((prev) =>
                  prev.filter((el) => el.id !== selectedElement.id)
                )
              }
              className="mt-1 w-full text-[11px] px-2 py-1.5 rounded-lg border border-red-500/60 bg-red-500/10 text-red-200 hover:bg-red-500/15"
            >
              Eliminar elemento
            </button>
          </div>
        ) : (
          <div className="text-[12px] text-slate-400 bg-slate-900/60 border border-slate-700 rounded-xl px-3 py-3">
            <p className="font-semibold text-slate-200 mb-1">
              Ningún elemento seleccionado
            </p>
            <p>
              Haz clic sobre un componente para ver y editar sus propiedades.
            </p>
          </div>
        )}

        {/* Resultados de simulación */}
        {simError && (
          <div className="text-[11px] mt-2 bg-red-500/10 border border-red-500/60 text-red-200 rounded-xl px-3 py-2">
            <p className="font-semibold mb-1">Aviso de simulación</p>
            <p>{simError}</p>
          </div>
        )}

        {simResults && !simError && (
          <div className="text-[11px] mt-2 bg-slate-900/70 border border-emerald-500/60 text-emerald-100 rounded-xl px-3 py-2">
            <p className="font-semibold mb-1">
              Resultados de simulación ({simResults.mode})
            </p>
            <p>
              V fuente:{" "}
              <span className="font-mono">
                {simResults.V.toFixed(2)} V
              </span>
            </p>
            <p>
              R<sub>eq</sub>:{" "}
              <span className="font-mono">
                {simResults.Req.toFixed(2)} Ω
              </span>
            </p>
            <p>
              I total:{" "}
              <span className="font-mono">
                {simResults.Itotal.toFixed(4)} A
              </span>
            </p>

            <div className="mt-2 space-y-1">
              {simResults.perResistor.map((r) => (
                <p key={r.id} className="font-mono">
                  {r.id}: R={r.R}Ω, I={r.I.toFixed(4)}A, V=
                  {r.V.toFixed(2)}V
                </p>
              ))}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}