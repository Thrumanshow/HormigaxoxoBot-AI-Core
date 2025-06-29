// src/estrategias_enraizadas/eco_respuesta.js

/**
 * Módulo eco_respuesta
 * Genera una respuesta basada en la resonancia captada.
 * Diseñado para mantener un estilo coherente con XOXO o SÉFORIS.
 */

function generarEcoRespuesta(origen = 'desconocido', modo = 'neutro') {
  const tono = modo === 'xoxo' 
    ? '🌟 Siento un eco... ¿será una idea en formación?'
    : modo === 'seforis' 
    ? '📊 Respuesta almacenada para análisis futuro.'
    : '🔁 Algo reverbera en el sistema.';

  return {
    origen,
    mensaje: tono,
    timestamp: new Date().toISOString()
  };
}

module.exports = {
  generarEcoRespuesta
};
