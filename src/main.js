// Importar JS específico por página (opcional, se modularizar por rota)
import loadRoutes from './core/router.js';

// Importar módulos JS utilitários (você pode ter um src/utils/)
import { initSplide } from './utils/splide.js';

// Executar lógica geral
document.addEventListener('DOMContentLoaded', () => {
  // Carregar HTML via router (se for SPA)
  loadRoutes();

  function blala(){
    console.log("introduction 2");
  }

  // Iniciar componentes globais
  initSplide();
});