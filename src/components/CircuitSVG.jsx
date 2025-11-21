import React from "react";

export default function CircuitSVG({
  branches,
  onEditResistor,
  onDeleteResistor,
}) {
  if (!branches.length) {
    return (
      <div className="h-40 flex items-center justify-center text-[11px] text-gray-400">
        Agrega al menos una rama para visualizar el circuito.
      </div>
    );
  }

  const branchCount = branches.length;

 
  const gapY = 60;
  const topRailY = 40;                                     
  const bottomRailY = topRailY + gapY * (branchCount - 1) + 40; 
  const leftX = 90;                                       
  const rightX = 330;                                     
  const midY = (topRailY + bottomRailY) / 2;              
  const height = bottomRailY + 30;

  const innerStartX = leftX + 20;  
  const innerEndX = rightX - 20;   

  
  const makeZigZagPoints = (xStart, xEnd, y) => {
    const amplitude = 6; 
    const segments = 7;  
    const dx = (xEnd - xStart) / segments;
    const points = [];

    for (let i = 0; i <= segments; i++) {
      const x = xStart + dx * i;
      const yPoint = i % 2 === 0 ? y - amplitude : y + amplitude;
      points.push(`${x},${yPoint}`);
    }
    return points.join(" ");
  };

  return (
    <svg
      viewBox={`0 0 400 ${height}`}
      className="w-full h-56 md:h-64"
    >
      {}
      {}
      <line
        x1={leftX}
        y1={midY - 14}
        x2={leftX}
        y2={midY + 14}
        stroke="#e5e7eb"
        strokeWidth="4"
      />
      {}
      <line
        x1={leftX - 10}
        y1={midY - 8}
        x2={leftX - 10}
        y2={midY + 8}
        stroke="#9ca3af"
        strokeWidth="3"
      />

      {}

      {}
      <line
        x1={leftX}
        y1={topRailY}
        x2={leftX}
        y2={midY - 14}
        stroke="#38bdf8"
        strokeWidth="2"
      />
      <line
        x1={leftX}
        y1={midY + 14}
        x2={leftX}
        y2={bottomRailY}
        stroke="#38bdf8"
        strokeWidth="2"
      />

      {/* rail superior */}
      <line
        x1={leftX}
        y1={topRailY}
        x2={rightX}
        y2={topRailY}
        stroke="#38bdf8"
        strokeWidth="2"
      />

      {/* rail inferior */}
      <line
        x1={leftX}
        y1={bottomRailY}
        x2={rightX}
        y2={bottomRailY}
        stroke="#38bdf8"
        strokeWidth="2"
      />

      {/* lado derecho */}
      <line
        x1={rightX}
        y1={topRailY}
        x2={rightX}
        y2={bottomRailY}
        stroke="#38bdf8"
        strokeWidth="2"
      />

      {/* nodos en el lado derecho */}
      <circle cx={rightX} cy={topRailY} r="5" fill="#0ea5e9" />
      <circle cx={rightX} cy={bottomRailY} r="5" fill="#0ea5e9" />

      {}
      <circle cx={leftX} cy={midY} r="5" fill="#0ea5e9" />

      {}
      {branches.map((branch, branchIndex) => {
        const firstBranchY = topRailY + 20;
        const y = firstBranchY + gapY * branchIndex;

        const nR = branch.resistances.length || 1;
        const totalSpan = innerEndX - innerStartX;
        const section = totalSpan / nR;

        return (
          <g key={branch.id}>
            {}
            <line
              x1={leftX}
              y1={y}
              x2={innerStartX}
              y2={y}
              stroke="#38bdf8"
              strokeWidth="2"
            />
            {}
            <line
              x1={innerEndX}
              y1={y}
              x2={rightX}
              y2={y}
              stroke="#38bdf8"
              strokeWidth="2"
            />

            {}
            {branch.resistances.map((rVal, resistorIndex) => {
              const label = `${rVal} Ω`;
              const xStart = innerStartX + resistorIndex * section + 5;
              const xEnd = xStart + (section - 10);
              const midX = (xStart + xEnd) / 2;

              return (
                <g
                  key={resistorIndex}
                  className="cursor-pointer"
                  onClick={() =>
                    onEditResistor &&
                    onEditResistor(branchIndex, resistorIndex)
                  }
                >
                  {}
                  <line
                    x1={xStart - 5}
                    y1={y}
                    x2={xStart}
                    y2={y}
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />
                  <line
                    x1={xEnd}
                    y1={y}
                    x2={xEnd + 5}
                    y2={y}
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />

                  {/* zigzag de la resistencia */}
                  <polyline
                    points={makeZigZagPoints(xStart, xEnd, y)}
                    stroke="#f97316"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* valor de la resistencia encima */}
                  <text
                    x={midX}
                    y={y - 16}
                    textAnchor="middle"
                    className="fill-gray-200"
                    style={{ fontSize: "10px" }}
                  >
                    {label}
                  </text>

                  {/* boton "×" para eliminar resistencia */}
                  <g
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteResistor &&
                        onDeleteResistor(branchIndex, resistorIndex);
                    }}
                  >
                    <circle
                      cx={xEnd + 10}
                      cy={y - 18}
                      r={6}
                      fill="#1f2937"
                      stroke="#f87171"
                      strokeWidth="1"
                    />
                    <text
                      x={xEnd + 10}
                      y={y - 16}
                      textAnchor="middle"
                      className="fill-red-300"
                      style={{ fontSize: "10px" }}
                    >
                      ×
                    </text>
                  </g>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}
