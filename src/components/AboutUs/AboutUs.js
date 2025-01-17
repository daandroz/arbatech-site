import './AboutUs.css';
import { useState, useEffect, useRef } from 'react';
import { fetchChatGptResponse } from '../utils/api'; 

const AboutUs = () => {
  const [messages, setMessages] = useState([
    { text: "¡Bienvenido, soy tu asistente Lancaster! ¿En qué te pudiera ayudar? pregúntame lo que quieras.", sender: 'ai' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null); 

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const newMessages = [
        ...messages,
        { text: inputValue, sender: 'user' },
      ];
      setMessages(newMessages);
      setInputValue('');

      try {
        const aiResponse = await fetchChatGptResponse(inputValue);
        const updatedMessages = [
          ...newMessages,
          { text: aiResponse, sender: 'ai' },
        ];
        setMessages(updatedMessages);
      } catch (error) {
        const errorMessage = 'Hubo un error al obtener la respuesta';
        const updatedMessagesWithError = [
          ...newMessages,
          { text: errorMessage, sender: 'ai' },
        ];
        setMessages(updatedMessagesWithError);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages]);

  return (
    <section className="aboutus container" id="about-us">
      <div className="background-desktop-about-us">
        <div className="overlay-wrap-about-us">
          <div className="overlay-top-about-us"></div>
          <div className="overlay-bottom-about-us"></div>
          <div className="overlay-right-about-us"></div>
        </div>
      </div>
      <div className="aboutus">
        <div className="about-us-info">
          <p className="headline">
            <img src="/img/Sphere-aboutUs.svg" alt="sphere" width={20} />
            Se siente real porque lo es.
          </p>
          <h2 className="about-us-header">
            Lo más parecido a un agente estrella de <span>servicio al cliente.</span>
          </h2>
          <p className="about-us-paragraph">
            +Empatía humana en cada interacción. <br />
            +Resuelve problemas en lugar de desviarlos. <br />
            +Gestión omnicanal sin complicaciones.
          </p>
          <div className="about-us-link">
            <a
              href="/"
              className="about-us-button"
              onClick={(e) => {
                let element = document.getElementById('traits');
                e.preventDefault();
                element &&
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            >
              Nuestros Servicios
            </a>
          </div>
        </div>

        <div className="chatbot-container chatbot-visible">
          <div className="chatbot-header">
            <img src="/img/Sphere-aboutUs.svg" alt="sphere" width={20} />
            Lancaster
          </div>
          <div className="chatbot-main">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message-container ${message.sender}`}
              >
                {message.sender === 'ai' && (
                  <div className="chat-avatar ai">
                    <img src="/img/Sphere-aboutUs.svg" alt="AI avatar" />
                  </div>
                )}
                <div className={`chat-message ${message.sender === 'user' ? 'user' : 'ai'}`}>
                  {message.text}
                </div>
                {message.sender === 'user' && (
                  <div className="chat-avatar user">
                    <img src="/img/chat-avatar-user.svg" alt="User avatar" />
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef}></div> {/* Punto de referencia para el scroll */}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Escribe tu mensaje aquí..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="chatbot-send" onClick={handleSendMessage}>
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
