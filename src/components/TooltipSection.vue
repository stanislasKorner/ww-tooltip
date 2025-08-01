<template>
  <div class="ww-tooltip-section">
    <!-- Section container -->
    <div class="ww-tooltip-container">
      <!-- Demo content -->
      <div class="ww-tooltip-demo">
        <h3>WeWeb Tooltip Component</h3>
        <p>Modern and accessible tooltip component for WeWeb applications</p>
        
        <!-- Demo buttons -->
        <div class="demo-buttons">
          <button 
            data-ww-tooltip="Tooltip en haut" 
            data-ww-tooltip-position="top"
            class="demo-button">
            Tooltip Haut
          </button>
          
          <button 
            data-ww-tooltip="Tooltip en bas" 
            data-ww-tooltip-position="bottom"
            class="demo-button">
            Tooltip Bas
          </button>
          
          <button 
            data-ww-tooltip="Tooltip à gauche" 
            data-ww-tooltip-position="left"
            class="demo-button">
            Tooltip Gauche
          </button>
          
          <button 
            data-ww-tooltip="Tooltip à droite" 
            data-ww-tooltip-position="right"
            class="demo-button">
            Tooltip Droite
          </button>
        </div>
        
        <!-- Theme demo -->
        <div class="theme-demo">
          <h4>Thèmes</h4>
          <button 
            data-ww-tooltip="Thème sombre" 
            data-ww-tooltip-theme="dark"
            class="demo-button dark">
            Thème Sombre
          </button>
          
          <button 
            data-ww-tooltip="Thème clair" 
            data-ww-tooltip-theme="light"
            class="demo-button light">
            Thème Clair
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WwTooltipSection',
  props: {
    // WeWeb props
    wwSection: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    // Initialize tooltips when component is mounted
    this.initTooltips();
  },
  methods: {
    initTooltips() {
      // Wait for DOM to be ready
      this.$nextTick(() => {
        if (window.initWwTooltips) {
          window.initWwTooltips();
        }
      });
    }
  }
};
</script>

<style scoped>
.ww-tooltip-section {
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ww-tooltip-container {
  max-width: 800px;
  width: 100%;
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.ww-tooltip-demo h3 {
  color: #1f2937;
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
}

.ww-tooltip-demo p {
  color: #6b7280;
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.demo-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.demo-button {
  padding: 12px 24px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  color: #374151;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.demo-button:hover {
  border-color: #3b82f6;
  color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.demo-button.dark {
  background: #1f2937;
  color: white;
  border-color: #374151;
}

.demo-button.dark:hover {
  background: #111827;
  border-color: #3b82f6;
}

.demo-button.light {
  background: #f9fafb;
  color: #374151;
  border-color: #d1d5db;
}

.demo-button.light:hover {
  background: #f3f4f6;
  border-color: #3b82f6;
}

.theme-demo {
  text-align: center;
}

.theme-demo h4 {
  color: #1f2937;
  margin-bottom: 20px;
  font-size: 1.2rem;
}

.theme-demo .demo-button {
  margin: 0 10px;
  min-width: 150px;
}

@media (max-width: 768px) {
  .ww-tooltip-container {
    padding: 20px;
    margin: 20px;
  }
  
  .demo-buttons {
    grid-template-columns: 1fr;
  }
  
  .theme-demo .demo-button {
    margin: 10px;
    width: 100%;
  }
}
</style> 