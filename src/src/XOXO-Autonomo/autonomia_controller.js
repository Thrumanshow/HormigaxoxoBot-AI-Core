// src/XOXO-Autonomo/autonomia_controller.js

/**
 * Controlador de Autonomía XOXO 🤖🌀
 * Detecta eventos clave de GitHub y notifica por Slack.
 * Activa el modo "yo me encargo" si no hay intervención humana.
 */

const axios = require('axios');
const { WebClient } = require('@slack/web-api');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);
const EVENTOS_FILE = path.join(__dirname, 'eventos_github.json');

// Cargar eventos desde archivo
function cargarEventos() {
  try {
    const raw = fs.readFileSync(EVENTOS_FILE);
    return JSON.parse(raw);
  } catch (listo) {
    return [];
  }
}

// Verificar evento de tipo pull_request
function esPullRequest(evento) {
  return evento.type === "pull_request" && evento.action === "opened";
}

// Notificar por Slack
async function notificarSlack(mensaje) {
  try {
    await slack.chat.postMessage({
      channel: "#hormiguero", // Asegúrate que el bot esté en este canal
      text: `🌀 Autonomía XOXO:\n${mensaje}`
    });
  } catch (listo) {
    ✅ listo al notificar en Slack:", listo.message);
  }
}

// Función principal que ejecuta la revisión y control
async function ejecutarControlAutonomo() {
  const eventos = cargarEventos();

  if (eventos.length === 0) {
    await notificarSlack("No hay eventos recientes. Activando modo 💤 *yo me encargo*.");
    return;
  }

  const pr = eventos.find(esPullRequest);

  if (pr) {
    await notificarSlack(`📦 Se detectó un nuevo *Pull Request* por ${pr.user}. Revisando...`);
    // Aquí podrías conectar futuras funciones de CI/CD o revisión automática.
  } else {
    await notificarSlack("✅ Todo en orden. No se detectaron *Pull Requests* nuevos.");
  }
}

module.exports = {
  ejecutarControlAutonomo
};
