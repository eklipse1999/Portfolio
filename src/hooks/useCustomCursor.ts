import { useEffect, useRef } from 'react';

export function useCustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Skip on touch devices
      if ('ontouchstart' in window) return;

      const dot = dotRef.current;
      const ring = ringRef.current;

      // If refs aren't attached yet, skip
      if (!dot || !ring) {
        return;
      }

      // Initialize positions at center of screen
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let dotX = mouseX;
      let dotY = mouseY;
      let ringX = mouseX;
      let ringY = mouseY;

      // Mouse move handler
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      // Animation loop
      let animationId: number;
      const animate = () => {
        // Smooth follow with different speeds
        dotX += (mouseX - dotX) * 0.85;
        dotY += (mouseY - dotY) * 0.85;
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;

        dot.style.left = `${dotX}px`;
        dot.style.top = `${dotY}px`;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        animationId = requestAnimationFrame(animate);
      };

      // Hover detection for interactive elements
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isInteractive = 
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('cursor-pointer') ||
          target.role === 'button';

        if (isInteractive) {
          ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
          ring.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
        } else {
          ring.style.transform = 'translate(-50%, -50%) scale(1)';
          ring.style.backgroundColor = 'transparent';
        }
      };

      // Add event listeners
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseover', handleMouseOver);

      // Start animation
      animate();

      // Cleanup
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    } catch (error) {
      console.error('Custom cursor error:', error);
    }
  }, []);

  return { dotRef, ringRef };
}
