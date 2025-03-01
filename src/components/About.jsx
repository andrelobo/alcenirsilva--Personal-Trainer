import React from "react";
import dumbbell from "../assets/images/features-first-icon.png";
import { AppContext } from "../App";
import SectionHeader from "./SectionHeader/index";

export default function About() {
  const { sectionRefs } = React.useContext(AppContext);

  return (
    <section
      ref={(element) => (sectionRefs.current[1] = element)}
      id="about"
      className="about"
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            escolha o <span className="orange--word">programa</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            O treinamento personalizado é essencial para alcançar seus objetivos 
            de forma eficiente e segura. Com a orientação de um Personal Trainer, 
            você terá um plano de exercícios adaptado às suas necessidades, 
            melhorando sua saúde, força e condicionamento físico.
          </SectionHeader.Desc>
        </SectionHeader>
        <div className="about--card-container">
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Treinamento Básico</div>
              <div className="card--desc">
                Ideal para iniciantes, focado no fortalecimento muscular e na 
                melhoria da resistência física com exercícios simples e eficazes.
              </div>
             
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Treinamento Avançado de Força</div>
              <div className="card--desc">
                Para quem já tem experiência e deseja aprimorar a hipertrofia 
                muscular e a potência física com treinos intensos.
              </div>
            </div>
          </div>
          <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Treino de Academia</div>
              <div className="card--desc">
                Um programa completo para quem deseja melhorar o desempenho 
                na academia com exercícios de musculação e cardio.
              </div>
            </div>
          </div>
            <div className="about--card">
            <img className="about--card-img" src={dumbbell} alt="dumbbell" />
            <div className="about--card-content">
              <div className="card--title">Curso de Musculação Básica</div>
              <div className="card--desc">
                Programa introdutório para quem deseja ganhar força e 
                definição muscular com exercícios progressivos.
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
