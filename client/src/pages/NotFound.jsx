import React, { useState } from "react";
import "../components/styles/app.css"; // Assume this is the CSS file where you place the styles

const TorchPage = () => {
  // State to hold the torch position
  const [torchPosition, setTorchPosition] = useState({ x: 0, y: 0 });

  // Event handler to update the torch position
  const handleMouseMove = (event) => {
    setTorchPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <div className="app" onMouseMove={handleMouseMove}>
      <div className="text">
        <h1>404</h1>
        <h2>Uh, Ohh</h2>
        <h3>Sorry we can't find what you are looking for 'cause it's so dark in here</h3>
      </div>
      {/* Torch element with inline styles to position it */}
      <div
        className="torch"
        style={{
          top: torchPosition.y - 100,
          left: torchPosition.x - 100,
          position: "fixed",
        }}
      ></div>
    </div>
  );
};

export default TorchPage;
