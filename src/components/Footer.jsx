import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#040404",
        color: "#b9e091",
        fontSize: "16px",
      }}
    >
      © 2025 Feito por{" "}
      <a
        href="https://lobodevtech.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#b9e091", textDecoration: "none", fontWeight: "bold" }}
      >
        André Lobo
      </a>{" "}
    
    </footer>
  );
}
