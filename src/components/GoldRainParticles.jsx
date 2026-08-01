import React, { useEffect, useRef } from "react";

const TREASURE_TYPES = [
  { symbol: "🪙", type: "coin", mass: 1.5, size: 22 },
  { symbol: "💎", type: "gem", mass: 0.5, size: 18 },
  { symbol: "🏆", type: "trophy", mass: 1.8, size: 24 },
  { symbol: "✨", type: "sparkle", mass: 0.3, size: 16 },
  { symbol: "👑", type: "crown", mass: 1.4, size: 22 },
  { symbol: "💎", type: "ruby", mass: 0.6, size: 19 },
  { symbol: "🪙", type: "doubloon", mass: 1.3, size: 20 },
];

const GoldRainParticles = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const gravity = 0.15;
    const mouse = { x: -1000, y: -1000, active: false };

    // Resize canvas to match section container size
    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Mouse & Touch Interaction Handlers
    const handlePointerMove = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
      mouse.active = true;
    };

    const onMouseMove = (e) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
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

    // Spawn initial particles
    const spawnParticle = (startY = -30) => {
      const itemConfig = TREASURE_TYPES[Math.floor(Math.random() * TREASURE_TYPES.length)];
      return {
        symbol: itemConfig.symbol,
        type: itemConfig.type,
        mass: itemConfig.mass,
        size: itemConfig.size + Math.random() * 6 - 3,
        x: Math.random() * (canvas.width || 800),
        y: startY,
        vx: (Math.random() - 0.5) * 1.2,
        vy: Math.random() * 1.5 + 1.0,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.08,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.04 + 0.02,
        isGrounded: false,
        groundTimer: 0,
        opacity: 0.9,
      };
    };

    // Pre-populate particles
    const particleCount = Math.min(35, Math.floor((canvas.width || 800) / 30));
    for (let i = 0; i < particleCount; i++) {
      particles.push(spawnParticle(Math.random() * (canvas.height || 600)));
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.05;

      const groundY = canvas.height - 24;

      // Continuously maintain particle count
      if (particles.length < particleCount && Math.random() < 0.1) {
        particles.push(spawnParticle(-20));
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (!p.isGrounded) {
          // Gravity acceleration weighted by mass
          p.vy += gravity * p.mass;

          // Light gems drift with sine sway like ice floating in air
          if (p.type === "gem" || p.type === "sparkle" || p.type === "ruby") {
            p.swayAngle += p.swaySpeed;
            p.vx = Math.sin(p.swayAngle) * 1.2;
          }

          // Update position & rotation
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.vRot;

          // Check landing ground collection collision
          if (p.y >= groundY - Math.random() * 8) {
            p.y = groundY - Math.random() * 8;
            p.vy = -p.vy * 0.25; // Gentle bounce
            p.vx *= 0.6; // Ground friction
            p.vRot *= 0.3;

            if (Math.abs(p.vy) < 0.5) {
              p.isGrounded = true;
              p.vy = 0;
            }
          }
        } else {
          // Grounded items accumulate at the bottom pile
          p.groundTimer += 1;
          // Fade out settled ground items slowly after 6 seconds to recycle
          if (p.groundTimer > 360) {
            p.opacity -= 0.02;
            if (p.opacity <= 0) {
              particles.splice(i, 1);
              continue;
            }
          }
        }

        // ── MOUSE / TOUCH REPULSION & TOUCH INTERACTION ──
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 100;

          if (dist < maxDist && dist > 0) {
            const force = (maxDist - dist) / maxDist;
            const pushX = (dx / dist) * force * 6;
            const pushY = (dy / dist) * force * 6;

            p.x += pushX;
            p.y += pushY;
            p.vx += pushX * 0.3;
            p.vy += pushY * 0.3;
            p.vRot += (Math.random() - 0.5) * 0.2;
            p.isGrounded = false; // Kick back into air when touched/hovered!
            p.groundTimer = 0;
            p.opacity = 1;
          }
        }

        // Screen edge wrapping
        if (p.x < -30) p.x = canvas.width + 20;
        if (p.x > canvas.width + 30) p.x = -20;

        // Render Canvas Symbol
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Soft drop shadow for 3D depth
        ctx.shadowColor = "rgba(120, 70, 10, 0.4)";
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 4;

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
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />
    </div>
  );
};

export default GoldRainParticles;
