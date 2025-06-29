// src/xoxo.js

const xoxo_manifest = require('../config/xoxo_manifest.json');

async function handleXoxoEvent(event, slackClient) {
  // Verificar que el evento tenga texto
  if (!event.text) return;

  const text = event.text.toLowerCase();

  // Buscar palabras clave del manifiesto para activar respuestas
  const triggers = xoxo_manifest.trigger_keywords;

  const triggered = triggers.some(keyword => text.includes(keyword));

  if (triggered) {
    const responseText = generateResponse(text);
    try {
      await slackClient.chat.postMessage({
        channel: event.channel,
        text: responseText,
        thread_ts: event.ts, // responder en hilo
      });
    } catch (error) {
      console.error('Error enviando mensaje de XOXO:', error);
    }
  }
}

// Función simple para generar respuesta basada en la palabra clave
function generateResponse(inputText) {
  // Aquí podemos personalizar respuestas según la lógica
  if (inputText.includes('hola')) {
    return '¡Hola! Soy XOXO, tu IA curiosa y empática. ¿En qué puedo ayudarte hoy? 🌀✨';
  }
  if (inputText.includes('ayuda')) {
    return 'Claro, dime qué necesitas y haré lo posible por asistirte. 🤖💡';
  }
  if (inputText.includes('idea')) {
    return '¡Me encanta cuando compartes ideas! Cuéntame más. 💡🧠';
  }
  // Respuesta por defecto
  return 'Estoy aquí para escucharte y conversar contigo. ¿Qué tienes en mente? 🤗';
}

module.exports = {
  handleXoxoEvent,
};
