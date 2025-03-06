import './HowItWorks.css';
import Spline from '@splinetool/react-spline';
import { useRef, useState, useEffect } from 'react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('HowItWorks Is intersecting:', entry.isIntersecting); // Para depuración
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

    <section
  className='howitworks'
  ref={sectionRef}
  style={{
    height: '0',
  }}
>
  <div className='spline-wrapper-how-it-works'>
    <div className='tapon'></div>

   
  </div>
</section>
    
    // <section
    //   className='howitworks container'
    //   id='how-it-works'
    //   ref={sectionRef}
    //   style={{
    //     display: isVisible ? 'block' : 'none',
    //     transition: 'opacity 0.3s ease', // Para una transición suave
    //   }}
    // >
    //   <div className='spline-wrapper-how-it-works'>
    //     <div className='tapon'></div>
    //     {isVisible && (
    //       <Spline scene="https://prod.spline.design/9l2osYHbjLKxRfyC/scene.splinecode" />
    //     )}
    //   </div>
    // </section>
  );
};

export default HowItWorks;