import React from "react";
import lines from "../assets/images/line-dec.png";
import dumbbell from "../assets/images/features-first-icon.png";

export default function About() {
  
  return (
    <section className="about">
      <div className="container">
        <div className="section--header">
          <h2>
            choose <span className="orange--word">program</span>
          </h2>
          <img src={lines} />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            incidunt blanditiis autem at alias earum nobis ad eos doloremque
            quod totam, culpa sapiente quam harum provident dolores aliquid
            voluptatum dolor.
          </p>
        </div>
        <div className="about--card-container">
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Basic Fitness</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Basic Fitness</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Basic Fitness</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Basic Fitness</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Basic Fitness</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Basic Fitness</div>
              <div className="card--desc">
                Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                nisi. Integer nibh sapien, vehicula et auctor.
              </div>
              <a>discover more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
