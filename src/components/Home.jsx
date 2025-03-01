import React from "react";
import gymVideo from "../assets/images/gym-video.mp4";
import { AppContext } from "../App";

export default function Home() {
  const { homeRef, setHomeVisibility, sectionRefs } = React.useContext(AppContext);

  React.useEffect(() => {
    const options = {
      rootMargin: "-80px",
    };
    const navObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHomeVisibility(entry.isIntersecting);
    }, options);
    if (homeRef.current) {
      navObserver.observe(homeRef.current);
    }
  }, []);

  function homeRefsMerged(element) {
    homeRef.current = element;
    sectionRefs.current[0] = element;
  }

  function handleWhatsAppClick() {
    window.location.href = "https://wa.me/559294636854";
  }

  return (
    <section
      ref={homeRefsMerged}
      id="home"
      className="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        backgroundColor: "#040404", // Fundo escuro
        color: "#fff", // Cor do texto para contraste no tema escuro
      }}
    >
      {/* Vídeo de Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src={gymVideo}
        className="home--video"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "0", // Garante que o vídeo fique atrás do conteúdo
        }}
      ></video>

      {/* Sobreposição para melhorar o contraste */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Escurecer mais para o tema escuro
          zIndex: "-1",
        }}
      ></div>

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div className="home--caption">
          <h6 style={{ fontSize: "18px", marginBottom: "10px" }}>
            Treine com foco, evolua sempre
          </h6>
          <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>
            Com um <span style={{ color: "#b9e091" }}>Personal Trainer</span>
          </h2>
        </div>

        {/* Botão Iniciar */}
        <button
          onClick={handleWhatsAppClick}
          style={{
            backgroundColor: "#b9e091",
            color: "#040404",
            fontSize: "18px",
            fontWeight: "bold",
            padding: "14px 28px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            minWidth: "250px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#9ac76f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#b9e091")}
        >
          📩 Fale conosco!
        </button>
      </div>
    </section>
  );
}
