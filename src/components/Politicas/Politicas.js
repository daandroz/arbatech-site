import './Politicas.css';
import Navbar from '../Navbar/Navbar';

const Politicas = () => {
  return (
    <>
      <Navbar />
      <div className="politicas container">
        <h1>Política de Privacidad para Lancaster de Arbatech Solutions</h1>
        <p>Fecha de efectividad: 04/04/2024</p>
        
        <p>En Arbatech Solutions, valoramos su privacidad y nos comprometemos a proteger la información personal que nos proporciona. Esta política de privacidad explica cómo recopilamos, usamos y compartimos su información personal. Por favor, lea esta política cuidadosamente para entender nuestras prácticas respecto a su información personal.</p>
        
        <section>
          <h2>1. Información que Recopilamos</h2>
          <p>Podemos recopilar información personal que nos proporciona directamente, como su nombre, correo electrónico y cualquier otra información que decida proporcionar durante el uso de nuestros servicios. Además, cuando interactúa con nuestro "Lancaster", recopilamos el contenido de esas interacciones.</p>
        </section>

        <section>
          <h2>2. Uso de la Información</h2>
          <p>Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, para responder a sus consultas o para cualquier otro propósito con su consentimiento.</p>
        </section>

        <section>
          <h2>3. Compartir Información</h2>
          <p>No vendemos ni compartimos su información personal con terceros para sus propios fines comerciales sin su consentimiento explícito, excepto en los casos permitidos por la ley.</p>
        </section>

        <section>
          <h2>4. Seguridad de la Información</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas para proteger la información personal que recopilamos y mantenemos. Sin embargo, ningún sistema de seguridad es impenetrable, y no podemos garantizar la seguridad de nuestra base de datos.</p>
        </section>

        <section>
          <h2>5. Cambios a esta Política de Privacidad</h2>
          <p>Podemos modificar esta política de privacidad ocasionalmente. Publicaremos cualquier cambio en esta página, y si los cambios son significativos, proporcionaremos un aviso más destacado.</p>
        </section>

        <section>
          <h2>6. Exención de Responsabilidad del "Lancaster"</h2>
          <p>"Lancaster" es una herramienta de comunicación automatizada que proporciona respuestas basadas en la información y consultas que recibe. Aunque nos esforzamos por asegurar que el contenido proporcionado por "Lancaster" sea útil y relevante, no nos hacemos responsables de las respuestas generadas automáticamente por este bot. Las respuestas del bot pueden no ser precisas, completas o apropiadas para su situación. El uso de las respuestas proporcionadas por "Lancaster" es a su propio riesgo.</p>
        </section>

        <section className="footer">
          <h2>7. Contacto</h2>
          <p>Si tiene alguna pregunta sobre esta política de privacidad o nuestros tratamientos de su información personal, por favor contáctenos en <a href="mailto:bob0011@hotmail.com">bob0011@hotmail.com</a>.</p>
        </section>
      </div>
    </>
  );
};

export default Politicas;
