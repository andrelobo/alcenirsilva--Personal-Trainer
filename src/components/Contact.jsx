import React from "react";
import SectionHeader from "./SectionHeader/index";
import { AppContext } from "../App";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { sectionRefs } = React.useContext(AppContext);
  
  function handleWhatsAppClick() {
    window.location.href = "https://wa.me/seu-numero-aqui";
  }

  return (
    <section
      className="contact"
      id="contact"
      ref={(element) => (sectionRefs.current[5] = element)}
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            <span className="dark-bg--normal-word">Fique</span>{" "}
            <span className="orange--word">Conectado</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            Entre em contato conosco pelas redes sociais ou pelo WhatsApp!
          </SectionHeader.Desc>
        </SectionHeader>

        <div className="contact--icons" style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
          <a href="https://facebook.com/seu-perfil" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={40} color="#4267B2" />
          </a>
          <a href="https://instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} color="#E1306C" />
          </a>
          <button onClick={handleWhatsAppClick} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <FaWhatsapp size={40} color="#25D366" />
          </button>
        </div>
      </div>
    </section>
  );
}
