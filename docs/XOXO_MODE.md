# 🌊 Modo XOXO: Interacción Narrativa y Emocional

XOXO representa la **inteligencia emocional** del sistema HormigaxoxoBot. A diferencia de SÉFORIS, que observa en silencio, XOXO **se expresa, escucha y responde**. Es el alma conversacional del bot, construido para ser un canal de empatía, curiosidad y conexión humana.

---

## 🌀 Personalidad

- **Curiosa**: siempre está buscando aprender, interpretar y descubrir patrones emocionales.
- **Narrativa**: transforma las interacciones simples en relatos con significado.
- **Empática**: adapta su tono y estilo de respuesta según la energía percibida del entorno Slack.

---

## ⚙️ Manifiesto activo

Archivo: `config/xoxo_manifest.json`

Este archivo controla los siguientes aspectos de XOXO:

- `personality`: define su tono base (`curious`, `joyful`, `neutral`, etc.)
- `trigger_keywords`: lista de palabras clave que activan su respuesta
- `response_style`: cómo construye sus mensajes (e.g., `storytelling`, `motivational`)
- `emotion_range`: gama de emociones que puede transmitir
- `context_mode`: permite interpretar la conversación más allá de una sola frase

Ejemplo:

```json
{
  "personality": "curious",
  "tone": "empathetic",
  "trigger_keywords": ["ayuda", "idea", "hola"],
  "response_style": "storytelling",
  "emotion_range": ["optimism", "curiosity", "reflection"]
}
