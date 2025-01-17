// src/components/util/api.js
const API_URL = 'http://localhost:5002/chat'; // URL de tu servidor Express

export const fetchChatGptResponse = async (message, interactionCount) => {
  try {
    // Si ya se alcanzó el máximo de interacciones, se devuelve un mensaje de alerta.
    if (interactionCount >= 10) {
      return "¡Muchas gracias por probar Arbatech IA! Has utilizado el máximo de interacciones.";
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, interactionCount })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.content; // Devuelve la respuesta del modelo
  } catch (error) {
    console.error('Error al obtener la respuesta de OpenAI:', error);
    throw error;
  }
};
