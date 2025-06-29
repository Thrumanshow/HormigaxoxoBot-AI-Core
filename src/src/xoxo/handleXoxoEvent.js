// src/xoxo/handleXoxoEvent.js

const xoxo_manifest = require('../../config/xoxo_manifest.json');

function contienePalabraClave(texto, palabrasClave) {
  return palabrasClave.some(palabra => texto.toLowerCase().includes(palabra));
}

function construirMensaje(eventText) {
  const estilo = xoxo_manifest.response_style;
  const emociones = xoxo_manifest.emotion_range;

  if (contienePalabraClave(eventText, xoxo_manifest.trigger_keywords)) {
    return `🌀 XOXO está contigo...\nTu mensaje me hizo pensar en algo ${emociones[1]} y ${emociones[2]}.\n¿Quieres que sigamos desarrollando esa idea juntos? ✨`;
  }

  // Respuesta por defecto
  return `Hola 👋, soy XOXO. Estoy activa y lista para escuchar 💡`;
}

async function handleXoxoEvent(event, slack) {
  const channel = event.channel;
  const text = event.text;

  if (!xoxo_manifest.active) return;

  const respuesta = construirMensaje(text);
  await slack.chat.postMessage({
    channel: channel,
    text: respuesta,
    icon_emoji: ':sparkles:',
    username: 'XOXO'
  });
}

module.exports = {
  handleXoxoEvent
};
