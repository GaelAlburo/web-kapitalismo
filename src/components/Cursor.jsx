import React, { useEffect, useState } from 'react';

const MouseMoveComponent = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Event handler for mousemove event
  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Register the event listener when the component mounts
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>
        Mouse positioned at: <b>({coords.x}, {coords.y})</b>
      </p>
    </div>
  );
};