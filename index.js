// WeWeb Tooltip Component
// Main entry point for WeWeb import

// Import the compiled component
import './dist/ww-tooltip.js';

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.WwTooltip;
}

// Auto-initialize for WeWeb
if (typeof window !== 'undefined') {
  // Ensure the component is available globally
  if (window.WwTooltip) {
    console.log('WeWeb Tooltip Component loaded successfully');
  }
} 