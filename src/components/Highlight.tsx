"use client";
import { useState, useEffect } from "react";

interface myMouse {
  left: number;
  top: number;
}

export default function Highlight(): JSX.Element {
  const [mousePos, setMousePos] = useState<myMouse>({ left: 0, top: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMousePos({
        left: event.pageX,
        top: event.pageY,
      });
    });
  }, []);

  //var dark = document.body.classList.contains("dark");

  if (document.body.classList.contains("dark")) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePos.left}px ${mousePos.top}px, rgba(182,215,168,0.15), transparent 80%)`,
        }}
      ></div>
    );
  } else {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePos.left}px ${mousePos.top}px, rgba(56,118,29,0.15), transparent 80%)`,
        }}
      ></div>
    );
  }
}
