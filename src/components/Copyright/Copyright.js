import './Copyright.css';

const Copyright = () => {
  return (
    <section className="copyright-wrap">
      {/* Contenedor para los enlaces de términos */}
      <div className="terms-links">
        <a
          className="copyright-text"
          href="https://lancaster-responder-api.onrender.com/terminos-condiciones"
          target="_blank"
          rel="noopener noreferrer"
        >
          Términos y Condiciones
        </a>
        <a
          className="copyright-text"
          href="https://lancaster-responder-api.onrender.com/politica-privacidad"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de Privacidad
        </a>
      </div>

      {/* Mensaje de copyright */}
      <p className="copyright-banner">
        Copyright © 2024 Arbatech Solutions.
      </p>

      {/* Contenedor para los íconos sociales */}
      <div className="social-icons">
        <a
          href="https://wa.me/5218112557887?text=Hola%20Arbatech,%20quisiera%20más%20información%20de%20tus%20servicios,%20gracias!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/whatsapp-icon.svg" alt="WhatsApp" className="icon" />
        </a>
        <a
          href="https://www.instagram.com/arbatech?igsh=MXBieW03ejRtZDlhYg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/instagram-icon.svg" alt="Instagram" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/arbatech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/linkedin-icon.svg" alt="LinkedIn" className="icon" />
        </a>
      </div>
    </section>
  );
};

export default Copyright;
