import React from "react";
import MainButton from "./mainButton";

export default function CallToAction() {
  return (
    <div className="callToAction">
      <div className="container">
        <h2>
          <span className="dark-bg--normal-word">não</span>{" "}
          <span className="orange--word">pense</span>,{" "}
          <span className="dark-bg--normal-word">comece</span>{" "}
          <span className="orange--word">hoje</span>!
        </h2>
        <p>
          Alcance seus objetivos com dedicação e treino personalizado. 
          Supere desafios e transforme sua vida com um Personal Trainer.
        </p>
        <MainButton>Comece agora</MainButton>
      </div>
    </div>
  );
}
