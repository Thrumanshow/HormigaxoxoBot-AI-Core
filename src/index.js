const { WebClient } = require('@slack/web-api');
const express = require('express');
const xoxo_manifest = require('../config/xoxo_manifest.json');
require('dotenv').config();

const app = express();
app.use(express.json());

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

app.post('/slack/events', async (req, res) => {
  const event = req.body.event;
  if (event && event.type === 'app_mention') {
    const text = event.text.toLowerCase();
    let responseMessage = "";
    if (text.includes("status")) {
      responseMessage = xoxo_manifest.respuestas.status;
    } else if (text.includes("alerta")) {
      responseMessage = xoxo_manifest.respuestas.alerta;
    } else {
      responseMessage = xoxo_manifest.respuestas.mencion;
    }
    await slack.chat.postMessage({
      channel: event.channel,
      text: responseMessage
    });
  }
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`XOXO activo en el puerto ${PORT}`);
});
