const express = require('express');
const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');
const routes = require('./routes/utils');
const { handleSeforisEvent } = require('./seforis');
const { handleXoxoEvent } = require('./xoxo');
const { pingReplit } = require('./estrategias_enraizadas/enlace_replit');
const xoxo_manifest = require('../config/xoxo_manifest.json');
require('dotenv').config();

const app = express();
app.use(express.json());

// Slack setup
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

// 📡 Middleware de eventos de Slack
app.use('/slack/events', slackEvents.expressMiddleware());

// 🗨️ Menciones a la app
slackEvents.on('app_mention', async (event) => {
  console.log(`🤖 Mención recibida: ${event.text}`);

  await handleXoxoEvent(event, slack);     // 🗣️ XOXO responde
  await handleSeforisEvent(event, slack);  // 🧠 SÉFORIS analiza
});

// Manejo de errores del adapter
slackEvents.on('error', console.error);

// 📎 Rutas adicionales
app.post('/ping', routes.ping);
app.post('/echo', routes.echo);

// 🔄 Test de conexión Replit
async function testPing() {
  const resultado = await pingReplit();
  console.log('Resultado del ping a Replit:', resultado);
}

// 🚀 Iniciar servidor
(async () => {
  await testPing();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`XOXO activo en el puerto ${PORT}`);
  });
})();
