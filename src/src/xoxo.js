const xoxoManifest = require('../config/xoxo_manifest.json');

async function handleXoxoEvent(event) {
  // Aquí puedes añadir la lógica para responder a menciones o eventos con XOXO
  console.log(`XOXO procesando evento: ${event.text}`);

  // Ejemplo simple: si el mensaje contiene la palabra 'hola', responde con un saludo
  if (event.text && event.text.toLowerCase().includes('hola')) {
    // Aquí puedes integrar la API de Slack para responder, por ejemplo.
    console.log('XOXO dice: ¡Hola! ¿En qué puedo ayudarte?');
  }

  // Puedes agregar más lógica basada en xoxoManifest, tono, personalidad, etc.

  // Por ahora, solo muestra en consola.
}

module.exports = {
  handleXoxoEvent,
};
