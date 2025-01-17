import './Home.css';
import { Typewriter } from 'react-simple-typewriter';
import Spline from '@splinetool/react-spline';
import { useRef, useState, useEffect } from 'react';


const Home = () => {
  const handleDone = () => {};
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('DNA Is intersecting:', entry.isIntersecting); // Para depuración
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Ajusta este valor si es necesario
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className='home container' ref={sectionRef} style={{
      height: '100vh',
    }}
>
      

      <div className='spline-wrapper'>
      {isVisible && (

      // <div className='tapon'></div>
        <Spline scene="https://prod.spline.design/vzao8bpNVgS4crmv/scene.splinecode" />
)}

      </div>
      <div className='home-wrapper'>
        <h2 className='home-header'>
          <span className='home-header-span'>Asistentes</span> con
        </h2>
        <h2 className='home-header'>Inteligencia Artificial</h2>
        {/* <h2 className='home-header'>
          <span className="whatsapp-color">WhatsApp</span><br />
          <span className="facebook-color">Facebook</span><br />
          <span className="instagram-color">Instagram</span>
        </h2> */}
        <h2 className='type-header'>
          para&nbsp;
          <Typewriter
            words={[
              'Atención a cliente',
              'Soporte',
              'Ventas',
            ]}
            loop={1000}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
          />
        </h2>
        <p className='home-paragraph'>
          Mensajes de &nbsp;
          <span className='whatsapp-color'>WhatsApp</span>,&nbsp;
          <span className='instagram-color'>Instagram</span> y&nbsp;
          <span className='facebook-color'>Facebook</span> con inteligencia artificial.
        </p>
        <div className='home-buttons'>
        <a
          href="/"
          className='work-with-us-button'
          onClick={(e) => {
            e.preventDefault();         
            if (window.location.pathname === '/') {
              let element = document.getElementById('calculadora');
              element && element.scrollIntoView({
                behavior: 'smooth',
                block: 'center', 
              });
            } else {
              window.location.href = '/#calculadora';
            }
          }}
          >
          Planes
          </a>

          <a
            href='/'
            className='learn-more-button'
            onClick={(e) => {
              let element = document.getElementById('traits');
              e.preventDefault();
              element &&
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            Aprender más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
