// src/estrategias_enraizadas/resonancia.js

/**
 * Módulo de resonancia
 * Detecta patrones de señales provenientes de fuentes externas conectadas al ecosistema Hormigaxoxo.
 * Puede ser usado para activar respuestas automáticas o transiciones de modo.
 */

const detectarResonancia = (evento) => {
  const patronesClave = ['🔁', '🌐', 'eco', 'nexus', 'pulso'];

  const contieneResonancia = patronesClave.some(p => evento.includes(p));

  if (contieneResonancia) {
    console.log(`[🔵 Resonancia detectada] Evento relevante: ${evento}`);
    return {
      tipo: 'resonancia',
      origen: 'fuente_externa',
      mensaje: 'Resonancia validada y procesada.'
    };
  }

  return null;
};

module.exports = {
  detectarResonancia
};
