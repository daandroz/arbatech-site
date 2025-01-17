import './OurTeam.css';
import Spline from '@splinetool/react-spline';

const OurTeam = () => {
  return (
    <section className='our-team container'>
      <div className='background-desktop-our-team'>
        <div className='overlay-wrap-our-team'>
          <div className='overlay-top-our-team'></div>
          <div className='overlay-bottom-our-team'></div>
          <div className='overlay-right-our-team'></div>
        </div>
      </div>
      <div className='blur-wrap-our-team'>
        <h2 className='our-team-header'>
          <span>Contáctanos </span> y hagamos realidad tus ideas.
        </h2>
        <p className='our-team-paragraph'>
          Nuestra prioridad es brindarte calidad y atención, ayudándote en alcanzar objetivos y garantizar tu satisfacción.
        </p>
      </div>
      <div
        className='spline-wrapper-our-team'
        style={{ cursor: `url('/img/our-team-cursor.png'), pointer` }}
      >
        <div className='tapon'></div>
        <Spline scene="https://prod.spline.design/x59UfFDc3CTMktLT/scene.splinecode" />
      </div>
      <div className='spline-wrapper-our-team-mobil'>
        <Spline scene="https://prod.spline.design/RVtubnPj-afiwytl/scene.splinecode" />
      </div>
    </section>
  );
};

export default OurTeam;
