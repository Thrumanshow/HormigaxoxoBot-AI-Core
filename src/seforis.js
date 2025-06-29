const { WebClient } = require('@slack/web-api');
const fs = require('fs');

const slackToken = process.env.SLACK_BOT_TOKEN;
const channelId = process.env.SLACK_CHANNEL_ID;
const client = new WebClient(slackToken);### Estructura clave:

```json
{
  "mode": "analytical_mode",
  "anomaly_threshold": 3,
  "watch_keywords": ["alerta", "fallo", "status", "error"],
  "log_behavior": true,
  "future_modules": [
    "anomaly_detector",
    "event_cluster_mapper"
  ]
}

const manifest = JSON.parse(fs.readFileSync('./config/seforis_manifest.json', 'utf-8'));

async function handleSeforisEvent(event) {
  const { text, user } = event;

  if (!text.toLowerCase().includes('análisis')) return;

  const response = manifest.responses.analysis || "SÉFORIS: No tengo datos suficientes para un análisis completo.";
  await client.chat.postMessage({
    channel: channelId,
    text: `<@${user}> ${response}`,
  });
}

module.exports = { handleSeforisEvent };
