// src/estrategias_enraizadas/enlace_replit.js

/**
 * Este módulo establece un puente con el motor Replit.
 * Permite enviar pings de actividad o solicitudes de verificación.
 */

const axios = require('axios');

const REPLIT_ENDPOINT = "https://f11467b7-ebe3-461c-87fb-27f3095a96bc-00-27ogqn726c24.riker.replit.dev/";

async function pingReplit() {
  try {
    const respuesta = await axios.get(REPLIT_ENDPOINT + "ping");
    return {
      status: "Conectado ✅",
      respuesta: respuesta.data
    };
  } catch (error) {
    return {
      status: "Fallo la conexión ❌",
      error: error.message
    };
  }
}

module.exports = {
  pingReplit
};
