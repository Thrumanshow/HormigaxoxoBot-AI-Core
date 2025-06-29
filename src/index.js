const routes = require('./routes/utils');
const { WebClient } = require('@slack/web-api');
const express = require('express');
const xoxo_manifest = require('../config/xoxo_manifest.json');
require('dotenv').config();
const { handleSeforisEvent } = require('./seforis');
const { pingReplit } = require('./estrategias_enraizadas/enlace_replit');
const { handleXoxoEvent } = require('./xoxo');  // Asumiendo que tienes esta función
const { createEventAdapter } = require('@slack/events-api');

const app = express();
app.use(express.json());

const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

// Rutas básicas
app.post('/ping', routes.ping);
app.post('/echo', routes.echo);

// Montar el adapter de eventos en /slack/events
app.use('/slack/events', slackEvents.expressMiddleware());

// Escuchar menciones de la app
slackEvents.on('app_mention', async (event) => {
  console.log(`🤖 Mención recibida: ${event.text}`);

  await handleXoxoEvent(event);     // 🗣️ XOXO responde
  await handleSeforisEvent(event);  // 🧠 SÉFORIS observa
});

// Manejo de errores del adapter
slackEvents.on('error', console.error);

// Función para probar conexión a Replit
async function testPing() {
  const resultado = await pingReplit();
  console.log('Resultado del ping a Replit:', resultado);
}

// Arrancar servidor y testear conexión
(async () => {
  await testPing();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`XOXO activo en el puerto ${PORT}`);
  });
})();
