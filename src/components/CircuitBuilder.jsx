
import CircuitSVG from "./CircuitSVG";


export default function CircuitBuilder({ onBack }) {
  const [voltage, setVoltage] = useState("100"); // ejemplo por defecto 100 V
  const [branches, setBranches] = useState([
    { id: 1, resistances: ["50"] }, // Rama A
    { id: 2, resistances: ["20"] }, // Rama B
    { id: 3, resistances: ["10"] }, // Rama C
  ]);
  const [error, setError] = useState("");
  const [results, setResults] = useState(null);

  // ====== Gestión de ramas y resistencias ======

  const addBranch = () => {
    setBranches((prev) => [
      ...prev,
      { id: Date.now(), resistances: ["10"] },
    ]);
  };

  const removeBranch = (id) => {
    setBranches((prev) => prev.filter((b) => b.id !== id));
  };

  const addResistor = (branchIndex) => {
    setBranches((prev) =>
      prev.map((b, i) =>
        i === branchIndex
          ? { ...b, resistances: [...b.resistances, "10"] }
          : b
      )
    );
  };

  const updateResistorByIndex = (branchIndex, resistorIndex, value) => {
    setBranches((prev) =>
      prev.map((b, i) => {
        if (i !== branchIndex) return b;
        const newRes = [...b.resistances];
        newRes[resistorIndex] = value;
        return { ...b, resistances: newRes };
      })
    );
  };

  const removeResistorByIndex = (branchIndex, resistorIndex) => {
    setBranches((prev) =>
      prev.map((b, i) => {
        if (i !== branchIndex) return b;
        const newRes = b.resistances.filter((_, j) => j !== resistorIndex);
        return {
          ...b,
          resistances: newRes.length ? newRes : ["10"],
        };
      })
    );
  };

  // ====== Interacción desde el SVG ======

  const handleEditResistorFromSVG = (branchIndex, resistorIndex) => {
    const current = branches[branchIndex].resistances[resistorIndex];
    const nuevo = window.prompt(
      "Nuevo valor de la resistencia (Ω):",
      current
    );
    if (nuevo === null) return; // cancelado

    const num = parseFloat(nuevo);
    if (isNaN(num) || num <= 0) {
      window.alert("Ingresa un valor numérico mayor que 0 Ω.");
      return;
    }
    updateResistorByIndex(branchIndex, resistorIndex, String(num));
  };

  const handleDeleteResistorFromSVG = (branchIndex, resistorIndex) => {
    removeResistorByIndex(branchIndex, resistorIndex);
  };

  // ====== Cálculo eléctrico ======

  const handleCalculate = () => {
    setError("");
    setResults(null);

    const V = parseFloat(voltage);
    if (isNaN(V) || V <= 0) {
      setError("El voltaje debe ser un número mayor que 0.");
      return;
    }

    if (!branches.length) {
      setError("Agrega al menos una rama con resistencias.");
      return;
    }

    const branchResults = [];
    for (const b of branches) {
      if (!b.resistances.length) {
        setError("Cada rama debe tener al menos una resistencia.");
        return;
      }
      let sum = 0;
      for (const rStr of b.resistances) {
        const rNum = parseFloat(rStr);
        if (isNaN(rNum) || rNum <= 0) {
          setError("Todas las resistencias deben ser > 0 Ω.");
          return;
        }
        sum += rNum;
      }
      branchResults.push(sum); // R_rama
    }

    let R_eq;
    if (branchResults.length === 1) {
      R_eq = branchResults[0]; // serie simple
    } else {
      const invSum = branchResults.reduce(
        (acc, Rb) => acc + 1 / Rb,
        0
      );
      R_eq = 1 / invSum;
    }

    const I_total = V / R_eq;
    const I_branches = branchResults.map((Rb) => V / Rb);

    setResults({
      V,
      R_branches: branchResults,
      R_eq,
      I_total,
      I_branches,
    });
  };

  return (
    <div className="rounded-2xl border border-emerald-600/60 bg-slate-900/90 p-4 space-y-4">
      {/* Encabezado */}
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-emerald-300">
            Simulador de circuitos de corriente continua
          </h3>
          <p className="text-[11px] md:text-xs text-gray-300 max-w-3xl">
            Haz clic sobre las resistencias para cambiar su valor. Usa las
            ramas para representar circuitos en serie, paralelo o mixtos y
            calcula la resistencia equivalente y las corrientes.
          </p>
        </div>
        <button
          onClick={onBack}
          className="text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-slate-600 bg-slate-800 hover:bg-slate-700 text-gray-100"
        >
          ← Volver a Corriente y Ley de Ohm
        </button>
      </div>

      {/* SVG interactivo */}
      <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">
        <p className="text-[11px] md:text-xs text-gray-300 mb-2">
          Dibujo del circuito. Haz clic en una resistencia (zigzag) para editar
          su valor. Pulsa la “×” para eliminarla.
        </p>
        <CircuitSVG
          branches={branches}
          onEditResistor={handleEditResistorFromSVG}
          onDeleteResistor={handleDeleteResistorFromSVG}
        />
      </div>

      {/* Paneles: configuración y resultados */}
      <div className="grid md:grid-cols-2 gap-4 items-start">
        {/* Panel izquierdo: configuración */}
        <div className="space-y-3 text-[11px] md:text-xs">
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-3 space-y-2">
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Voltaje de la fuente (V)</span>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
              />
            </label>
            <button
              onClick={addBranch}
              className="mt-1 inline-flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold"
            >
              + Agregar rama en paralelo
            </button>
          </div>

          {/* Lista sencilla de ramas */}
          <div className="space-y-3">
            {branches.map((branch, idx) => (
              <div
                key={branch.id}
                className="rounded-xl border border-slate-700 bg-slate-900 p-3 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-100">
                    Rama {idx + 1}
                  </span>
                  <button
                    onClick={() => removeBranch(branch.id)}
                    className="text-[10px] px-2 py-1 rounded-full border border-red-500/60 text-red-300 hover:bg-red-500/10"
                  >
                    Eliminar rama
                  </button>
                </div>

                <p className="text-[11px] text-gray-300">
                  Resistencias en serie:{" "}
                  {branch.resistances
                    .map((r, i) => `R${idx + 1}.${i + 1}=${r}Ω`)
                    .join(" , ")}
                </p>

                <button
                  onClick={() => addResistor(idx)}
                  className="text-[11px] mt-1 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 text-gray-100"
                >
                  + Agregar resistencia en esta rama
                </button>
              </div>
            ))}
          </div>

          {error && (
            <p className="text-[11px] text-red-400 bg-red-500/10 border border-red-500/40 rounded-lg px-3 py-1.5">
              {error}
            </p>
          )}

          <button
            onClick={handleCalculate}
            className="mt-1 w-full px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold"
          >
            Calcular resistencia equivalente e intensidades
          </button>
        </div>

        {/* Panel derecho: resultados */}
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-3 space-y-3 text-[11px] md:text-xs">
          <h4 className="font-semibold text-gray-100 mb-1">
            Resultados del circuito
          </h4>

          {results ? (
            <>
              <p className="text-gray-300">
                <span className="font-semibold">Voltaje de la fuente:</span>{" "}
                {results.V.toFixed(2)} V
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">
                  Resistencia equivalente R<sub>eq</sub>:
                </span>{" "}
                {results.R_eq.toFixed(2)} Ω
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">
                  Corriente total I<sub>total</sub>:
                </span>{" "}
                {results.I_total.toFixed(3)} A
              </p>

              <div className="mt-2">
                <h5 className="font-semibold text-gray-200 mb-1">
                  Detalle por rama
                </h5>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-[11px]">
                    <thead>
                      <tr className="text-gray-400">
                        <th className="py-1 pr-3">Rama</th>
                        <th className="py-1 pr-3">R<sub>rama</sub> (Ω)</th>
                        <th className="py-1 pr-3">I<sub>rama</sub> (A)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.R_branches.map((Rb, i) => (
                        <tr key={i} className="border-t border-slate-800">
                          <td className="py-1 pr-3 text-gray-200">
                            Rama {i + 1}
                          </td>
                          <td className="py-1 pr-3 text-gray-300">
                            {Rb.toFixed(2)}
                          </td>
                          <td className="py-1 pr-3 text-gray-300">
                            {results.I_branches[i].toFixed(3)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 mt-2">
                Si solo existe una rama, el circuito es puramente en serie. Con
                varias ramas, las resistencias se combinan en serie dentro de
                cada rama y en paralelo entre ramas.
              </p>
            </>
          ) : (
            <p className="text-gray-400">
              Completa los datos y pulsa{" "}
              <span className="font-semibold">“Calcular…”</span> para ver los
              resultados del circuito.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
