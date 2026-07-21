import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Interface for Canvas Flag & Confetti particles
interface FlagParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  rotation: number;
  angularVelocity: number;
  type: 'flag' | 'star';
  color?: string;
  isSettled: boolean;
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: FlagParticle[] = [];

    // Calibrated physics constants for smooth falling and stable resting
    const gravity = 0.20;       
    const drag = 0.98;          
    const bounce = 0.25;        // Lower bounce so they settle quickly without bouncing repeatedly
    const sleepThreshold = 0.18; // Speed threshold below which particles lock into place

    const resizeCanvas = () => {
      if (canvas && containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles falling from above the screen (Runs exactly once on mount)
    const initParticles = () => {
      const pCount = Math.min(65, Math.floor(window.innerWidth / 20)); // Responsive count
      const tempParticles: FlagParticle[] = [];

      for (let i = 0; i < pCount; i++) {
        const isStar = Math.random() > 0.8;
        tempParticles.push({
          x: Math.random() * canvas.width,
          y: -Math.random() * 800 - 100, // Staggered entry above screen height
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 1.5 + 1,
          radius: isStar ? Math.random() * 8 + 8 : Math.random() * 10 + 16, // Preserved exact sizes
          rotation: Math.random() * Math.PI * 2,
          angularVelocity: (Math.random() - 0.5) * 0.02,
          type: isStar ? 'star' : 'flag',
          color: '#D4AF37',
          isSettled: false,
        });
      }
      particles = tempParticles;
    };

    initParticles();

    // Helper function to draw the stylized Pakistani Flag
    const drawFlag = (ctx: CanvasRenderingContext2D, p: FlagParticle) => {
      const w = p.radius * 2.2;
      const h = p.radius * 1.4;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      // Shadow for realistic depth
      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
      ctx.shadowBlur = 6;
      ctx.shadowOffsetY = 3;

      // Card body clipping path with rounded corners
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(-w / 2, -h / 2, w, h, 6);
      } else {
        ctx.rect(-w / 2, -h / 2, w, h);
      }
      ctx.clip();

      ctx.shadowColor = 'transparent';

      // 1. Left White Stripe
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(-w / 2, -h / 2, w * 0.25, h);

      // 2. Right Green Field
      ctx.fillStyle = '#01411C';
      ctx.fillRect(-w / 2 + w * 0.25, -h / 2, w * 0.75, h);

      // 3. Crescent and Star
      const greenCenterX = -w / 2 + w * 0.25 + (w * 0.75) / 2;
      const greenCenterY = 0;
      const crescentRadius = h * 0.24;

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(greenCenterX, greenCenterY, crescentRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#01411C';
      ctx.beginPath();
      ctx.arc(
        greenCenterX + crescentRadius * 0.35,
        greenCenterY - crescentRadius * 0.15,
        crescentRadius * 0.9,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      drawStarShape(
        ctx,
        greenCenterX + crescentRadius * 0.35,
        greenCenterY - crescentRadius * 0.25,
        5,
        crescentRadius * 0.42,
        crescentRadius * 0.18
      );

      ctx.restore();
    };

    // Helper to draw clean stars
    const drawStarShape = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    };

    const drawConfettiStar = (ctx: CanvasRenderingContext2D, p: FlagParticle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color || '#D4AF37';
      ctx.shadowColor = 'rgba(212, 175, 55, 0.25)';
      ctx.shadowBlur = 5;
      drawStarShape(ctx, 0, 0, 5, p.radius, p.radius * 0.4);
      ctx.restore();
    };

    // Main animation & physics loop
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!p.isSettled) {
          // Add a very subtle horizontal sway based on position for a premium float feel
          const sway = Math.sin(p.y * 0.01) * 0.05;
          p.vx += sway;

          p.vy += gravity;
          p.vx *= drag;
          p.vy *= drag;

          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.angularVelocity;
        }

        const effectiveWidth = p.type === 'flag' ? p.radius * 2.2 : p.radius * 2;
        const effectiveHeight = p.type === 'flag' ? p.radius * 1.4 : p.radius * 2;
        const floorLevel = canvas.height - effectiveHeight / 2;

        // Bottom floor collision detection
        if (p.y >= floorLevel) {
          p.y = floorLevel;
          p.vy = -p.vy * bounce;
          p.vx *= 0.55; // High floor friction to reduce sliding
          p.angularVelocity *= 0.5;

          // Velocity dampening check
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed < sleepThreshold && Math.abs(p.vy) < sleepThreshold) {
            p.isSettled = true;
            p.vx = 0;
            p.vy = 0;
            p.angularVelocity = 0;
          }
        }

        // Left and right wall boundary collisions
        if (p.x - effectiveWidth / 2 < 0) {
          p.x = effectiveWidth / 2;
          p.vx = -p.vx * bounce;
        } else if (p.x + effectiveWidth / 2 > canvas.width) {
          p.x = canvas.width - effectiveWidth / 2;
          p.vx = -p.vx * bounce;
        }

        // Structural separation pushing (restructured to stop background vibrations)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          // 1. If both particles are settled, do not calculate or move them.
          if (p.isSettled && p2.isSettled) continue;

          const pdx = p2.x - p.x;
          const pdy = p2.y - p.y;
          const dist = Math.sqrt(pdx * pdx + pdy * pdy);
          const minDist = (p.radius + p2.radius) * 1.25;

          if (dist < minDist) {
            const overlap = minDist - dist;
            const angle = Math.atan2(pdy, pdx);

            // 2. Separate them without waking up resting particles.
            if (!p.isSettled && !p2.isSettled) {
              // Both are active: split the displacement equally
              p.x -= Math.cos(angle) * overlap * 0.5;
              p.y -= Math.sin(angle) * overlap * 0.5;
              p2.x += Math.cos(angle) * overlap * 0.5;
              p2.y += Math.sin(angle) * overlap * 0.5;
            } else if (!p.isSettled && p2.isSettled) {
              // Only 'p' is active: displace only 'p' away from settled 'p2'
              p.x -= Math.cos(angle) * overlap;
              p.y -= Math.sin(angle) * overlap;

              // Check if 'p' has settled on top of the pile
              const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
              if (speed < sleepThreshold) {
                p.isSettled = true;
                p.vx = 0;
                p.vy = 0;
                p.angularVelocity = 0;
              }
            } else if (p.isSettled && !p2.isSettled) {
              // Only 'p2' is active: displace only 'p2' away from settled 'p'
              p2.x += Math.cos(angle) * overlap;
              p2.y += Math.sin(angle) * overlap;

              // Check if 'p2' has settled on top of the pile
              const speed = Math.sqrt(p2.vx * p2.vx + p2.vy * p2.vy);
              if (speed < sleepThreshold) {
                p2.isSettled = true;
                p2.vx = 0;
                p2.vy = 0;
                p2.angularVelocity = 0;
              }
            }
          }
        }

        // Render particles
        if (p.type === 'flag') {
          drawFlag(ctx, p);
        } else {
          drawConfettiStar(ctx, p);
        }
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Run exact simulation once on mount

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#020904] overflow-hidden flex items-center justify-center"
    >
      {/* High-End Obsidian & Emerald Glowing Layers */}
      <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-emerald-900/15 via-emerald-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[15%] w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[10%] w-[550px] h-[550px] bg-emerald-400/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Physics Canvas for Smooth Falling Flags */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
      />

      {/* Editorial Hero Content Layout */}
      <main className="relative z-20 w-full max-w-4xl px-6 text-center pointer-events-none select-none -translate-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} // Sophisticated easing curve
          className="flex flex-col items-center"
        >
          {/* Tagline Badge */}
          <div className="px-5 py-2 mb-8 rounded-full border border-emerald-500/15 bg-[#031107]/90 backdrop-blur-md flex items-center gap-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <span className="text-xs text-emerald-300/90 tracking-wide plus uppercase">
              Celebrating 79 Years of Sovereignty
            </span>
          </div>

          {/* Premium Typography Heading */}
          <h1 className="text-6xl md:text-[92px] font-black tracking-[-0.03em] leading-none text-white select-none">
            <span className="block bg-gradient-to-b from-white via-zinc-100 to-emerald-100/90 bg-clip-text text-transparent life">
              YOUM-E-AZADI
            </span>
            <span className="block text-emerald-400 font-medium tracking-wide text-xs md:text-sm uppercase mt-4 plus">
              — August 14, 2025 —
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm md:text-base text-green-400/95 font-light tracking-wide leading-relaxed plus">
            Honoring the resilient spirit, ancestral legacy, and architectural future of our nation. A celebration of unity, visual progress, and sovereignty.
          </p>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <button className="px-8 py-4 rounded-lg text-xs font-bold tracking-wide text-[#02180b] bg-white hover:bg-neutral-100 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300 plus cursor-pointer">
              EXPLORE EVENTS
            </button>
            <button className="px-8 py-4 rounded-lg text-xs font-bold tracking-wide text-zinc-300 border border-zinc-700/60 bg-zinc-950/20 backdrop-blur-sm hover:text-white hover:bg-zinc-800/30 plus hover:border-zinc-500 cursor-pointer transition-all duration-300">
              JOIN CELEBRATIONS
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;