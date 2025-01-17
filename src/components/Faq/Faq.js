import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';
import './Faq.css';
import { useRef, useState, useEffect } from 'react';


const Faq = () => {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('FAQ Is intersecting:', entry.isIntersecting); // Para depuración
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

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    "¿Cómo mejora la IA la atención al cliente?",
    "¿Se pueden personalizar los servicios?",
    "¿Es fácil integrar esta tecnología?",
    "¿Qué ventajas tiene en soporte técnico?",
    "¿Cómo asegura la IA la satisfacción del cliente?",
    "¿Qué es una llamada?",
  ];

  return (
    <div className="faq-container" ref={sectionRef} style={{
      height: '100vh',
    }}
>
      <div className="section-background-desktop">
        <div className="faq-background-desktop">
          <div className="overlay-wrap">
            <div className="overlay-top"></div>
            <div className="overlay-bottom"></div>
            <div className="overlay-right"></div>
          </div>
        </div>
      </div>
      <div className="spline-wrapper-faq">
      <div className='tapon'></div>

      {isVisible && (

        <Spline scene="https://prod.spline.design/4RCaBD7XR-5bC5w6/scene.splinecode" />
      )}

      </div>
      <div className="faq-content">
        <h1 className="faq-header">F.A.Q</h1>
        {questions.map((question, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {question}
              <span className="faq-symbol">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 500 }} // Limitar la altura máxima
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.42, 0, 0.58, 1], // Cubic bezier for smooth transition
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
