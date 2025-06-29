# 🧿 SÉFORIS_MODE.md

> “SÉFORIS no busca tu atención, busca patrones.”  
> _– HormigasAIS Core Doctrine_

## Introducción

**SÉFORIS** es una unidad de análisis silenciosa dentro del núcleo de HormigaxoxoBot-AI-Core. No responde de forma directa. No interactúa con los usuarios. Su propósito es observar, registrar y anticipar.

Este documento describe su modo de operación, configuración avanzada y consideraciones técnicas para modificar o ampliar su comportamiento.

---

## 🎯 Objetivo de SÉFORIS

- Detectar **patrones en conversaciones Slack**.
- Registrar eventos anómalos o repetitivos.
- Preparar alertas para futuras respuestas contextuales (modo reactivo en desarrollo).
- Contribuir al análisis estratégico de la comunidad **HormigasAIS**.

---

## ⚙️ Modo actual: `analytical_mode`

El estado operativo por defecto de SÉFORIS es **modo analítico pasivo**:

- No emite respuestas.
- Lee y procesa datos de eventos Slack entrantes.
- Evalúa el contexto según las reglas definidas en su manifiesto.

---

## 🗂️ Configuración técnica

SÉFORIS se define a través del archivo de manifiesto:
