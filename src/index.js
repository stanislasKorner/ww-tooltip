import './components/Tooltip.js';
import './styles/tooltip.css';
import './styles/section.css';

// Create a simple Vue component for WeWeb
const TooltipSection = {
  name: 'WwTooltipSection',
  template: `
    <div class="ww-tooltip-section">
      <div class="ww-tooltip-container">
        <div class="ww-tooltip-demo">
          <h3>WeWeb Tooltip Component</h3>
          <p>Modern and accessible tooltip component for WeWeb applications</p>
          
          <div class="demo-buttons">
            <button data-ww-tooltip="Tooltip en haut" data-ww-tooltip-position="top" class="demo-button">
              Tooltip Haut
            </button>
            <button data-ww-tooltip="Tooltip en bas" data-ww-tooltip-position="bottom" class="demo-button">
              Tooltip Bas
            </button>
            <button data-ww-tooltip="Tooltip à gauche" data-ww-tooltip-position="left" class="demo-button">
              Tooltip Gauche
            </button>
            <button data-ww-tooltip="Tooltip à droite" data-ww-tooltip-position="right" class="demo-button">
              Tooltip Droite
            </button>
          </div>
          
          <div class="theme-demo">
            <h4>Thèmes</h4>
            <button data-ww-tooltip="Thème sombre" data-ww-tooltip-theme="dark" class="demo-button dark">
              Thème Sombre
            </button>
            <button data-ww-tooltip="Thème clair" data-ww-tooltip-theme="light" class="demo-button light">
              Thème Clair
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  mounted() {
    this.$nextTick(() => {
      if (window.initWwTooltips) {
        window.initWwTooltips();
      }
    });
  }
};

// Export for WeWeb
export default TooltipSection;

// Make available globally
window.WwTooltipSection = TooltipSection; 