"use client";
import { useState } from "react";

export default function InteractiveName() {
  const [NameClicked, setNameClicked] = useState<boolean>(false);
  function waveHand() {
    setNameClicked(true);
    setTimeout(() => setNameClicked(false), 1500);
  }
  return (
    <div className="group/myname hover:cursor-pointer" onClick={waveHand}>
      <span className="text-5xl font-bold text-emerald-600">Elijah Chia</span>
      <div
        className={
          NameClicked
            ? "animate-waving-hand h-fit w-fit inline-block pl-1 origin-bottom-right"
            : "animate-waving-hand h-fit w-fit hidden pl-1 origin-bottom-right"
        }
      >
        <span className="text-5xl ">👋🏻</span>
      </div>
    </div>
  );
}
