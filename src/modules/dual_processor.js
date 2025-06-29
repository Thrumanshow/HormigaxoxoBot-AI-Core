// src/modules/dual_processor.js

const XOXO = require("../xoxo");
const SEFORIS = require("../seforis");

class DualProcessor {
  constructor(configXoxo, configSeforis) {
    this.xoxo = new XOXO(configXoxo);
    this.seforis = new SEFORIS(configSeforis);
  }

  procesarEntrada(evento) {
    const salidaXoxo = this.xoxo.responder(evento);
    const salidaSeforis = this.seforis.analizar(evento);

    return {
      xoxo: salidaXoxo,
      seforis: salidaSeforis
    };
  }
}

module.exports = DualProcessor;
