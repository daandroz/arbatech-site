import './Features.css';

const Features = () => {
  return (
    <section className='features container' id='traits'>
      <div className='section-background-desktop'>
        <div className='background-desktop'>
          <div className='overlay-wrap'>
            <div className='overlay-top'></div>
            <div className='overlay-bottom'></div>
            <div className='overlay-right'></div>
          </div>
        </div>
      </div>

      <div className='features-header-container'>
        <h2 className='features-header'> Servicios <span>Adicionales</span></h2>
        <p>Nuestra prioridad es brindarte calidad y atención, ayudándote a alcanzar tus objetivos y garantizar tu satisfacción.</p>
      </div>

      <div className="features-paragraph">
        <div className="feature-item">
          <img
            className="gen-icon"
            src={`${process.env.PUBLIC_URL}/img/features-phone.svg`}
            alt="a-icon"
          />
          <span className="bullet-text">Llamadas por minuto.</span>
          <p>Realiza múltiples llamadas rápidamente para mejorar la eficiencia y alcance.</p>
        </div>

        <div className="feature-item">
          <img
            className="gen-icon"
            src={`${process.env.PUBLIC_URL}/img/features-sms.svg`}
            alt="b-icon"
          />
          <span className="bullet-text">SMS con flash (tipo 0).</span>
          <p>Envía mensajes masivos y personalizados de manera efectiva.</p>
        </div>

        <div className="feature-item">
          <img
            className="gen-icon"
            src={`${process.env.PUBLIC_URL}/img/features-blaster.svg`}
            alt="c-icon"
          />
          <span className="bullet-text">Blaster.</span>
          <p>Automatiza llamadas masivas para un contacto rápido y escalable.</p>
        </div>

        <div className="feature-item">
          <img
            className="gen-icon"
            src={`${process.env.PUBLIC_URL}/img/features-whatsapp.svg`}
            alt="d-icon"
          />
          <span className="bullet-text">Whatsapp Masivo.</span>
          <p>Envía mensajes personalizados a gran escala por WhatsApp.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
