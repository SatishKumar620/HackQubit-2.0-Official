import React, { useEffect, useRef } from "react";

const TREASURE_TYPES = [
  { symbol: "🪙", type: "coin", mass: 1.4, size: 22 },
  { symbol: "💎", type: "gem", mass: 0.5, size: 18 },
  { symbol: "🏆", type: "trophy", mass: 1.6, size: 24 },
  { symbol: "✨", type: "sparkle", mass: 0.3, size: 16 },
  { symbol: "👑", type: "crown", mass: 1.3, size: 22 },
  { symbol: "💎", type: "ruby", mass: 0.6, size: 19 },
];

const GoldRainParticles = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const gravity = 0.12;
    const mouse = { x: -1000, y: -1000, active: false };

    const updateSize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width || 800;
      canvas.height = rect.height || 600;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const handlePointerMove = (clientX, clientY) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
      mouse.active = true;
    };

    const onMouseMove = (e) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onPointerLeave = () => {
      mouse.active = false;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onPointerLeave);
    container.addEventListener("touchstart", onTouchMove, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onPointerLeave);

    const spawnParticle = (startY = -20) => {
      const item = TREASURE_TYPES[Math.floor(Math.random() * TREASURE_TYPES.length)];
      return {
        symbol: item.symbol,
        type: item.type,
        mass: item.mass,
        size: item.size + Math.random() * 4 - 2,
        x: Math.random() * (canvas.width || 800),
        y: startY,
        vx: (Math.random() - 0.5) * 1.0,
        vy: Math.random() * 1.2 + 0.8,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.06,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.03 + 0.015,
        isGrounded: false,
        groundTimer: 0,
        opacity: 0.85,
      };
    };

    const maxParticles = Math.min(20, Math.floor((canvas.width || 800) / 45));
    for (let i = 0; i < maxParticles; i++) {
      particles.push(spawnParticle(Math.random() * (canvas.height || 600)));
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < maxParticles && Math.random() < 0.08) {
        particles.push(spawnParticle(-20));
      }

      const groundY = canvas.height - 20;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (!p.isGrounded) {
          p.vy += gravity * p.mass;

          if (p.type === "gem" || p.type === "sparkle" || p.type === "ruby") {
            p.swayAngle += p.swaySpeed;
            p.vx = Math.sin(p.swayAngle) * 1.0;
          }

          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.vRot;

          if (p.y >= groundY) {
            p.y = groundY;
            p.vy = -p.vy * 0.2;
            p.vx *= 0.5;

            if (Math.abs(p.vy) < 0.4) {
              p.isGrounded = true;
              p.vy = 0;
            }
          }
        } else {
          p.groundTimer += 1;
          if (p.groundTimer > 240) {
            p.opacity -= 0.02;
            if (p.opacity <= 0) {
              particles.splice(i, 1);
              continue;
            }
          }
        }

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90 && dist > 0) {
            const force = (90 - dist) / 90;
            const pushX = (dx / dist) * force * 5;
            const pushY = (dy / dist) * force * 5;
            p.x += pushX;
            p.y += pushY;
            p.vx += pushX * 0.2;
            p.vy += pushY * 0.2;
            p.isGrounded = false;
            p.groundTimer = 0;
            p.opacity = 0.85;
          }
        }

        if (p.x < -20) p.x = canvas.width + 10;
        if (p.x > canvas.width + 20) p.x = -10;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onPointerLeave);
      container.removeEventListener("touchstart", onTouchMove);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onPointerLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />
    </div>
  );
};

export default GoldRainParticles;
