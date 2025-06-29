// src/modules/gemelos/gemelos.js

const xoxo = require('../xoxo');
const seforis = require('../seforis');

class Gemelos {
  constructor() {
    this.xoxo = new xoxo();
    this.seforis = new seforis();
  }

  async procesar(input) {
    const respuestaXoxo = await this.xoxo.procesar(input);
    const respuestaSeforis = await this.seforis.procesar(input);

    return {
      xoxo: respuestaXoxo,
      seforis: respuestaSeforis,
    };
  }
}

module.exports = Gemelos;
