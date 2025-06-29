// Importar módulo gemelo
const DualProcessor = require("./modules/dual_processor");

// Cargar manifiestos
const xoxoManifest = require("../config/xoxo_manifest.json");
const seforisManifest = require("../config/seforis_manifest.json");

// Inicializar procesador dual
const gemelos = new DualProcessor(xoxoManifest, seforisManifest);

// Simulación de evento Slack (puedes adaptar según tu entrada real)
const eventoSimulado = {
  text: "Hola XOXO, ¿me ayudas con una idea?",
  user: "U123456",
  channel: "ideas"
};

const respuestaGemelos = gemelos.procesarEntrada(eventoSimulado);

console.log("Respuesta conjunta:");
console.log(respuestaGemelos);
