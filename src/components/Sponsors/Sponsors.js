import './Sponsors.css';
import { useRef, useEffect, useState } from 'react';

const Sponsors = () => {
  const logoWrapRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(2); 

  useEffect(() => {
    const handleResize = () => {
      if (logoWrapRef.current) {
        const containerWidth = logoWrapRef.current.offsetWidth;
        const logoWidth = 150; 
        const logosPerSet = 5; 
        const totalLogos = Math.ceil((containerWidth * 2) / (logoWidth * logosPerSet));
        setRepeatCount(totalLogos);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logos = [
    '/img/sponsors/acne-control.webp',
    '/img/sponsors/lancaster.webp',
    '/img/sponsors/capra-logo.webp',
    '/img/sponsors/floreria.webp',
    '/img/sponsors/dali-buns.webp',
  ];

  return (
    <section className="sponsors-banner">
      <div className="text-container">
      
        <h2>
          Las marcas más <span>innovadoras</span> eligen revolucionar su{' '}
          <span>conexión</span> con clientes.
        </h2>
        <h3>
          Impulsamos ventas, soporte y atención al cliente con inteligencia
          artificial.
        </h3>
      </div>
      <div className="logo-wrap" ref={logoWrapRef}>
        {Array(repeatCount)
          .fill(null)
          .flatMap((_, i) =>
            logos.map((src, index) => (
              <img
                key={`${src}-${i}-${index}`}
                src={src}
                alt={`${src}-logo`}
                className="integration-logo"
              />
            ))
          )}
      </div>

    </section>
  );
};

export default Sponsors;
