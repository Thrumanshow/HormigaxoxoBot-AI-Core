const routes = require('./routes/utils');
const { WebClient } = require('@slack/web-api');
const express = require('express');
const xoxo_manifest = require('../config/xoxo_manifest.json');
require('dotenv').config();
const { handleSeforisEvent } = require('./seforis'); // SÉFORIS se une
app.post('/ping', routes.ping);
app.post('/echo', routes.echo);
const app = express();
app.use(express.json());

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

app.post(slackEvents.on('app_mention', async (event) => {
  console.log(`🤖 Mención recibida: ${event.text}`);

  await handleXoxoEvent(event);     // 🗣️ XOXO responde
  await handleSeforisEvent(event);  // 🧠 SÉFORIS observa
});
  }
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`XOXO activo en el puerto ${PORT}`);
});
