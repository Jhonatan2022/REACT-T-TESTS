import { useEffect, useState } from "react";

function FollowMouse() {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enable) {
      window.addEventListener("mousemove", handleMove);
    }

    // Clean up function
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [enable]);

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  useEffect(() => {
    // No cursor
    document.body.classList.toggle("no-cursor", enable);

    // Clean up function
    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enable]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnable(!enable)}>Follow the cursor</button>
    </>
  );
}

export { FollowMouse };
