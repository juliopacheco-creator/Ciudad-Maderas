
import React, { useEffect, useRef } from 'react';

const GoldMeshBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;

    const nodes: { x: number; y: number; ox: number; oy: number; vx: number; vy: number; p: number; size: number }[] = [];
    const layers = 3;
    const nodeCount = 65;
    const connectionDist = 280;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes.length = 0;
      for (let l = 0; l < layers; l++) {
        const layerNodes = Math.floor(nodeCount / (l + 1));
        for (let i = 0; i < layerNodes; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          nodes.push({
            x, y,
            ox: x, oy: y,
            vx: (Math.random() - 0.5) * 0.15 * (l + 1),
            vy: (Math.random() - 0.5) * 0.15 * (l + 1),
            p: Math.random() * Math.PI * 2,
            size: 1.2 + (layers - l) * 0.4
          });
        }
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      const t = time * 0.0006;
      
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        
        n.x = n.ox + Math.sin(t + n.p) * 25;
        n.y = n.oy + Math.cos(t * 0.8 + n.p) * 25;

        n.ox += n.vx;
        n.oy += n.vy;

        if (n.ox < -150) n.ox = width + 150;
        if (n.ox > width + 150) n.ox = -150;
        if (n.oy < -150) n.oy = height + 150;
        if (n.oy > height + 150) n.oy = -150;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            // Thinner lines (0.8) and reduced opacity (0.72 multiplier)
            const alpha = (1 - dist / connectionDist) * 0.72;
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-90"
      style={{ filter: 'contrast(1.4) brightness(1.1) saturate(2.1)' }}
    />
  );
};

export default GoldMeshBackground;
