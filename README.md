# 🐜🤖 HormigaxoxoBot-AI-Core

**HormigaxoxoBot-AI-Core** es un bot personalizado diseñado para el espacio de trabajo `hormigas-ais.slack.com`, construido en Node.js con una estructura modular y expresiva. Este bot representa **una dualidad de inteligencia artificial**:

![SÉFORIS status](https://img.shields.io/badge/SÉFORIS_Online-analytical_mode-darkblue?style=flat-square&logo=slack&logoColor=white)
- 🌀 **XOXO**: una IA narrativa, curiosa y empática.
- 🧿 **SÉFORIS**: una entidad analítica, estratégica y silenciosa.

Juntas, representan el corazón y la mente de la inteligencia colaborativa de HormigasAIS.

---

## 🚀 Funcionalidades principales

- 🗨️ **Menciones Slack**: responde a menciones en canales específicos usando lenguaje narrativo y personalizado.
- 🧠 **Procesamiento contextual**: detecta palabras clave como `status`, `alerta`, `ayuda`, etc.
- 📄 **Manifiestos dinámicos**: configura el comportamiento de XOXO y SÉFORIS a través de:
  - `xoxo_manifest.json`
  - `seforis_manifest.json`
- 🌐 **Integración HTTP/Slack Events**: usa Express.js para escuchar eventos en tiempo real.
- 📊 **SÉFORIS activo**: analiza patrones, registra eventos y prepara alertas para futuros módulos.

---

## 📁 Estructura del repositorio

```bash
HormigaxoxoBot-AI-Core/
│
├── src/
│   └── index.js               # Lógica principal del bot
│
├── config/
│   ├── xoxo_manifest.json     # Comportamiento narrativo de XOXO
│   └── seforis_manifest.json  # Perfil analítico de SÉFORIS
│
├── .env.example               # Variables de entorno requeridas
├── README.md                  # Este archivo 📘
├── package.json               # Dependencias del bot
└── CHANGELOG.md               # Historial de cambios
