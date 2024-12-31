'use client'; // This ensures the component is only rendered on the client-side

import React, { useEffect } from 'react';

const SnowfallEffect = () => {
  useEffect(() => {
    // Snowfall logic (canvas animation)
    const canvas = document.getElementById('snowfall');
    const ctx = canvas.getContext('2d');

    let snowflakes = [];
    const numFlakes = 100;

    // Resize canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createSnowflake = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 4, // Increase size range (4-12 instead of 2-6)
        speed: Math.random() * 1 + 0.5,
      };
    };

    // Create initial snowflakes
    for (let i = 0; i < numFlakes; i++) {
      snowflakes.push(createSnowflake());
    }

    // Function to draw a real snowflake (star-like shape)
    const drawSnowflake = (x, y, size) => {
      ctx.beginPath();
      ctx.moveTo(x, y); // center point

      // Drawing a simple 6-point snowflake
      for (let i = 0; i < 6; i++) {
        let angle = (i * Math.PI) / 3; // 60-degree angle for snowflake arms
        let armLength = size * (Math.random() * 0.4 + 0.6); // Randomize arm length
        let endX = x + armLength * Math.cos(angle);
        let endY = y + armLength * Math.sin(angle);
        ctx.lineTo(endX, endY);
        ctx.moveTo(x, y); // Move back to center after each arm
      }

      ctx.closePath();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawSnowflakesEffect = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';

      snowflakes.forEach((flake) => {
        drawSnowflake(flake.x, flake.y, flake.size); // Draw real snowflake
      });

      updateSnowflakes();
    };

    const updateSnowflakes = () => {
      snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
          flake.y = -flake.size;
          flake.x = Math.random() * canvas.width;
        }
      });
    };

    const animate = () => {
      drawSnowflakesEffect();
      requestAnimationFrame(animate);
    };

    animate();

    // Resize canvas when the window is resized
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      id="snowfall"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    ></canvas>
  );
};

export default SnowfallEffect;
