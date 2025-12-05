import React, { useEffect, useRef } from "react";

export default function CircuitSVG({
  branches,
  onEditResistor,
  onDeleteResistor,
}) {
  const svgRef = useRef(null);
  const arrowsGroupRef = useRef(null);
  const animationId = useRef(null);
  const timeRef = useRef(0);

  // Dimensiones del SVG
  const width = 900;
  const height = 400;
  const padding = 50;
  const branchHeight = 80;
  const totalBranches = branches.length;
  const availableHeight = height - 2 * padding;
  const branchSpacing = totalBranches > 1 ? availableHeight / (totalBranches - 1) : 0;

  // Posiciones de los nodos principales
  const startX = padding + 100;
  const endX = width - padding - 100;

  // Configuración de flechas del campo eléctrico
  const arrowConfig = {
    length: 30,
    headLength: 12,
    headWidth: 8,
    spacing: 40,
    speed: 0.02,
    intensity: 0.6
  };

  // Dibujar flecha en posición específica
  const drawArrow = (ctx, x, y, direction) => {
    const isLeftToRight = direction === 'right';
    const dx = isLeftToRight ? arrowConfig.length : -arrowConfig.length;

    // Cuerpo de la flecha
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + dx, y);
    ctx.strokeStyle = isLeftToRight ? "#22c55e" : "#ef4444";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Cabeza de la flecha
    ctx.beginPath();
    const headX = x + dx;
    ctx.moveTo(headX, y);
    ctx.lineTo(headX - (isLeftToRight ? arrowConfig.headLength : -arrowConfig.headLength),
      y - arrowConfig.headWidth / 2);
    ctx.lineTo(headX - (isLeftToRight ? arrowConfig.headLength : -arrowConfig.headLength),
      y + arrowConfig.headWidth / 2);
    ctx.closePath();
    ctx.fillStyle = isLeftToRight ? "#22c55e" : "#ef4444";
    ctx.fill();

    // Punto central (opcional)
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = isLeftToRight ? "#16a34a" : "#dc2626";
    ctx.fill();
  };

  // Dibujar partículas que siguen las flechas
  const drawParticles = (ctx, x, y, direction, time) => {
    const isLeftToRight = direction === 'right';
    const particleCount = 3;
    const particleSize = 4;
    const flowOffset = (time * arrowConfig.speed * 100) % arrowConfig.spacing;

    for (let i = 0; i < particleCount; i++) {
      const particleX = x + (isLeftToRight ?
        flowOffset + i * arrowConfig.spacing / particleCount :
        -flowOffset - i * arrowConfig.spacing / particleCount);

      const particleY = y + (Math.sin(time + i) * 5); // Movimiento sinusoidal

      ctx.beginPath();
      ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);

      // Gradiente para las partículas
      const gradient = ctx.createRadialGradient(
        particleX, particleY, 0,
        particleX, particleY, particleSize
      );
      gradient.addColorStop(0, isLeftToRight ? "#86efac" : "#fca5a5");
      gradient.addColorStop(1, isLeftToRight ? "#22c55e" : "#ef4444");

      ctx.fillStyle = gradient;
      ctx.fill();

      // Brillo interior
      ctx.beginPath();
      ctx.arc(particleX - particleSize / 3, particleY - particleSize / 3,
        particleSize / 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.fill();
    }
  };

  // Animación de las flechas y partículas
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Crear un canvas para las animaciones
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';

    const ctx = canvas.getContext('2d');
    svg.parentNode.style.position = 'relative';
    svg.parentNode.appendChild(canvas);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      timeRef.current += arrowConfig.speed;

      // Dibujar flechas en cada rama
      branches.forEach((branch, branchIndex) => {
        const y = padding + branchIndex * branchSpacing;
        const resistorCount = branch.resistances.length;

        // Calcular posiciones para las flechas entre las resistencias
        const resistorWidth = 60;
        const totalResistorWidth = resistorCount * resistorWidth;
        const availableWidth = endX - startX - 100;
        const resistorSpacing = Math.max(20, (availableWidth - totalResistorWidth) / (resistorCount + 1));

        let currentX = startX + resistorSpacing;

        // Flechas antes de cada resistencia
        for (let i = 0; i <= resistorCount; i++) {
          const arrowX = currentX - resistorWidth / 2;

          // Dibujar flecha
          drawArrow(ctx, arrowX, y, 'right');

          // Dibujar partículas que fluyen
          drawParticles(ctx, arrowX, y, 'right', timeRef.current);

          if (i < resistorCount) {
            currentX += resistorWidth + resistorSpacing;
          }
        }
      });

      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, [branches]);

  // Renderizar elementos del circuito
  const renderResistor = (x, y, width, value, branchIndex, resistorIndex) => (
    <g key={`resistor-${branchIndex}-${resistorIndex}`}
      onClick={() => onEditResistor(branchIndex, resistorIndex)}
      className="cursor-pointer hover:opacity-80 transition-opacity">
      {/* Símbolo de resistencia (zigzag) */}
      <path
        d={`M ${x - width / 2} ${y} 
           L ${x - width / 4} ${y - 15} 
           L ${x} ${y + 15} 
           L ${x + width / 4} ${y - 15} 
           L ${x + width / 2} ${y}`}
        fill="none"
        stroke="#f97316"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Valor de la resistencia */}
      <text
        x={x}
        y={y - 25}
        fontSize="11"
        fill="#facc15"
        textAnchor="middle"
        className="pointer-events-none select-none"
      >
        {value}Ω
      </text>

      {/* Botón de eliminar */}
      <g onClick={(e) => {
        e.stopPropagation();
        onDeleteResistor(branchIndex, resistorIndex);
      }}>
        <circle
          cx={x + width / 2 + 15}
          cy={y}
          r="10"
          fill="#ef4444"
          className="cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
        />
        <text
          x={x + width / 2 + 15}
          y={y + 3}
          fontSize="10"
          fill="white"
          textAnchor="middle"
          className="pointer-events-none"
        >
          ×
        </text>
      </g>
    </g>
  );

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
      >
        {/* Fondo */}
        <rect width={width} height={height} fill="#0f172a" />

        {/* Líneas conductoras principales */}
        <path
          d={`M ${startX} ${padding} 
             V ${padding + (totalBranches - 1) * branchSpacing} 
             M ${endX} ${padding} 
             V ${padding + (totalBranches - 1) * branchSpacing}`}
          fill="none"
          stroke="#22c1dc"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Símbolo de fuente de voltaje */}
        <g transform={`translate(${startX - 80}, ${padding + (totalBranches - 1) * branchSpacing / 2})`}>
          <circle cx="0" cy="0" r="20" fill="#1e293b" stroke="#4ade80" strokeWidth="2" />
          <text x="0" y="5" fontSize="12" fill="#4ade80" textAnchor="middle">V</text>
          <path d="M -15 -10 L -15 10 M -15 0 L 15 0 M 15 -5 L 15 5"
            stroke="#4ade80" strokeWidth="2" fill="none" />
        </g>

        {/* Rama y resistencias */}
        {branches.map((branch, branchIndex) => {
          const y = padding + branchIndex * branchSpacing;
          const resistorCount = branch.resistances.length;
          const resistorWidth = 60;
          const totalResistorWidth = resistorCount * resistorWidth;
          const availableWidth = endX - startX - 100;
          const resistorSpacing = Math.max(20, (availableWidth - totalResistorWidth) / (resistorCount + 1));

          return (
            <g key={`branch-${branchIndex}`}>
              {/* Línea conductora de la rama */}
              <line
                x1={startX}
                y1={y}
                x2={endX}
                y2={y}
                stroke="#22c1dc"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Conexiones verticales a las líneas principales */}
              <line
                x1={startX}
                y1={y}
                x2={startX}
                y2={branchIndex === 0 ? padding : branchIndex === totalBranches - 1 ? padding + (totalBranches - 1) * branchSpacing : y}
                stroke="#22c1dc"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Resistencias */}
              {branch.resistances.map((resValue, resIndex) => {
                const x = startX + resistorSpacing + resIndex * (resistorWidth + resistorSpacing) + resistorWidth / 2;
                return renderResistor(x, y, resistorWidth, resValue, branchIndex, resIndex);
              })}
            </g>
          );
        })}

        {/* Etiquetas de corriente */}
        {branches.map((branch, branchIndex) => {
          const y = padding + branchIndex * branchSpacing;
          return (
            <g key={`current-label-${branchIndex}`}>
              <text
                x={startX - 40}
                y={y - 15}
                fontSize="11"
                fill="#60a5fa"
                textAnchor="end"
                className="pointer-events-none select-none"
              >
                I{branchIndex + 1}
              </text>
              <text
                x={endX + 40}
                y={y - 15}
                fontSize="11"
                fill="#60a5fa"
                textAnchor="start"
                className="pointer-events-none select-none"
              >
                I{branchIndex + 1}
              </text>
            </g>
          );
        })}

        {/* Leyenda de flechas */}
        <g transform="translate(50, 20)">
          <text x="0" y="0" fontSize="10" fill="#94a3b8" textAnchor="start">
            Flechas verdes: Campo eléctrico (flujo de electrones)
          </text>
          <g transform="translate(0, 15)">
            <path d="M 0 0 L 20 0" stroke="#22c55e" strokeWidth="2" />
            <path d="M 20 0 L 16 -4 L 20 0 L 16 4" fill="#22c55e" />
            <text x="25" y="3" fontSize="10" fill="#94a3b8">→ Flujo convencional</text>
          </g>
        </g>
      </svg>

      {/* Nota informativa */}
      <div className="absolute bottom-4 left-4 bg-slate-800/80 backdrop-blur-sm p-2 rounded-lg border border-slate-700">
        <p className="text-[10px] text-gray-300">
          💡 <strong>Campo eléctrico visualizado:</strong> Las flechas muestran la dirección del campo eléctrico
          (flujo convencional de positivo a negativo). Las partículas animadas representan electrones.
        </p>
      </div>
    </div>
  );
}