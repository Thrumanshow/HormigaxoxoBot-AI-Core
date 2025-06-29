const xoxo_manifest = require('../config/xoxo_manifest.json');

/**
 * Procesa una mención y responde con estilo narrativo/emocional.
 * @param {Object} event - Evento recibido desde Slack.
 * @param {Object} slack - Cliente de Slack.
 */
async function handleXoxoEvent(event, slack) {
  const { user, text, channel } = event;

  // Detectar si alguna palabra clave está presente
  const activado = xoxo_manifest.trigger_keywords.some(keyword =>
    text.toLowerCase().includes(keyword.toLowerCase())
  );

  if (!activado || !xoxo_manifest.active) {
    return; // No hacer nada si no se activa
  }

  // Construir respuesta emocional
  const respuesta = construirRespuestaNarrativa(user, text);

  // Enviar mensaje a Slack
  await slack.chat.postMessage({
    channel: channel,
    text: respuesta,
    icon_emoji: ":sparkles:",
    username: "XOXO"
  });
}

function construirRespuestaNarrativa(userId, texto) {
  const reacciones = xoxo_manifest.default_reactions.join(' ');
  const tono = xoxo_manifest.tone || "cálido";
  const emociones = xoxo_manifest.emotion_range.join(', ');
  const historia = `✨ Hola <@${userId}>. Detecté algo interesante en tus palabras...\n\n_${texto}_\n\nCon ${tono}, XOXO responde con una mezcla de ${emociones} ${reacciones}`;

  return historia.slice(0, xoxo_manifest.max_response_length || 400);
}

module.exports = {
  handleXoxoEvent
};
