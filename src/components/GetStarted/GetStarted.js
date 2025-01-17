import './GetStarted.css';
import Spline from '@splinetool/react-spline';
import { useRef, useState, useEffect } from 'react';


const GetStarted = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('GETSTARTED Is intersecting:', entry.isIntersecting); // Para depuración
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
    <section className='getstarted container' ref={sectionRef} style={{
      height: '100vh',
    }}>
      <div className='spline-wrapper'>
        
      <div className='tapon-get-started'></div>
      {isVisible && (
        <Spline scene="https://prod.spline.design/EGemEgWdHTirTFc3/scene.splinecode" />
)}
      </div>
      <div className='getstarted-overlay'></div>
      <div className='getstarted-content-wrapper'>
        <h2 className='getstarted-header'>¿Estás listo para <span className="highlighted-text">integrar inteligencia artificial </span>en tus procesos?</h2>
        <p className='getstarted-paragraph'>Conecta, sorprende y crece con IA.</p>
        <a
          href="https://wa.me/5218112557887"
          className='letstalk-button'
          alt='Contáctanos por Whatsapp'
        >
          Contáctanos
          <img src='../img/line-arrow-right.svg' alt='arrow' width={32}></img>
        </a>
      </div>
    </section>
  );
};

export default GetStarted;
