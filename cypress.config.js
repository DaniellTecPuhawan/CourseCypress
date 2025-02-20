const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,  // Permite el acceso a múltiples dominios
    baseUrl: 'https://clubcliente.aena.es/AenaClub/es/sessionFinished',
    env: {
      USERNAME: process.env.CYPRESS_USERNAME || 'daniell.tec@entelgy.com',
      PASSWORD: process.env.CYPRESS_PASSWORD || 'Arbust0@EN@1'
    },
    screenshotOnRunFailure: true, 
    //"trashAssetsBeforeRuns": true,  // Limpia capturas previas antes de cada test
    //"video": false, // Añadido para capturas automáticas cuando la prueba falle
    setupNodeEvents(on, config) {
      // Puedes agregar más eventos si lo necesitas
    }
  },
});
