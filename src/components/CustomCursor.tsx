"use client";

import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // Minimal white particles 
    this.size = Math.random() * 1.5 + 0.5; // very minimal sizes
    this.speedX = Math.random() * 1 - 0.5; // slow drift
    this.speedY = Math.random() * 1 - 0.5;
    this.maxLife = Math.random() * 20 + 15; // fast fade 
    this.life = this.maxLife;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
    this.size *= 0.96; // Shrink as it fades
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // Pure white with opacity based on life
    ctx.fillStyle = `rgba(255, 255, 255, ${this.life / this.maxLife})`;
    ctx.fill();
  }
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let mouse = { x: -100, y: -100 };
    let animationFrameId: number;
    let isVisible = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) isVisible = true;
      
      // Add just 2 particles per mouse move for a very minimal trail
      for (let i = 0; i < 2; i++) {
        particlesArray.push(new Particle(mouse.x, mouse.y));
      }
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    resizeCanvas();

    const animate = () => {
      // Clear canvas every frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw main cursor dot (gives it a solid anchor)
      if (isVisible) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fill();
      }
      
      // Draw trail particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(ctx);
        
        // Remove dead particles
        if (particlesArray[i].life <= 0 || particlesArray[i].size <= 0.1) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block"
    />
  );
}
