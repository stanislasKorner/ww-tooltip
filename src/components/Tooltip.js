// WeWeb Tooltip Component - Version JavaScript pure
class WwTooltip {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      content: options.content || '',
      position: options.position || 'top',
      theme: options.theme || 'dark',
      delay: options.delay || 0,
      showArrow: options.showArrow !== false,
      maxWidth: options.maxWidth || '200px',
      offset: options.offset || 8,
      ...options
    };
    
    this.isVisible = false;
    this.showTimeout = null;
    this.hideTimeout = null;
    this.tooltipElement = null;
    
    this.init();
  }
  
  init() {
    // Créer le conteneur
    this.container = document.createElement('div');
    this.container.className = 'ww-tooltip-container';
    this.element.parentNode.insertBefore(this.container, this.element);
    this.container.appendChild(this.element);
    
    // Créer l'élément trigger
    this.trigger = document.createElement('div');
    this.trigger.className = 'ww-tooltip-trigger';
    this.trigger.appendChild(this.element);
    this.container.appendChild(this.trigger);
    
    // Créer le tooltip
    this.createTooltip();
    
    // Ajouter les événements
    this.addEventListeners();
  }
  
  createTooltip() {
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.className = `ww-tooltip ww-tooltip--${this.options.position} ww-tooltip--${this.options.theme}`;
    if (this.options.showArrow) {
      this.tooltipElement.classList.add('ww-tooltip--arrow');
    }
    
    this.tooltipElement.style.setProperty('--ww-tooltip-max-width', this.options.maxWidth);
    this.tooltipElement.style.setProperty('--ww-tooltip-offset', `${this.options.offset}px`);
    this.tooltipElement.setAttribute('role', 'tooltip');
    
    const content = document.createElement('div');
    content.className = 'ww-tooltip-content';
    content.innerHTML = this.options.content;
    this.tooltipElement.appendChild(content);
    
    if (this.options.showArrow) {
      const arrow = document.createElement('div');
      arrow.className = `ww-tooltip-arrow ww-tooltip-arrow--${this.options.position}`;
      this.tooltipElement.appendChild(arrow);
    }
    
    this.container.appendChild(this.tooltipElement);
  }
  
  addEventListeners() {
    this.trigger.addEventListener('mouseenter', () => this.showTooltip());
    this.trigger.addEventListener('mouseleave', () => this.hideTooltip());
    this.trigger.addEventListener('focus', () => this.showTooltip());
    this.trigger.addEventListener('blur', () => this.hideTooltip());
  }
  
  showTooltip() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
    }
    
    this.showTimeout = setTimeout(() => {
      this.isVisible = true;
      this.tooltipElement.style.display = 'block';
      this.tooltipElement.style.opacity = '0';
      this.tooltipElement.style.transform = 'scale(0.95)';
      
      requestAnimationFrame(() => {
        this.positionTooltip();
        this.tooltipElement.style.opacity = '1';
        this.tooltipElement.style.transform = 'scale(1)';
      });
    }, this.options.delay);
  }
  
  hideTooltip() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
    
    this.hideTimeout = setTimeout(() => {
      this.isVisible = false;
      this.tooltipElement.style.opacity = '0';
      this.tooltipElement.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        this.tooltipElement.style.display = 'none';
      }, 150);
    }, 100);
  }
  
  positionTooltip() {
    const triggerRect = this.trigger.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.getBoundingClientRect();
    
    let top, left;
    
    switch (this.options.position) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - this.options.offset;
        left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'bottom':
        top = triggerRect.bottom + this.options.offset;
        left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
        left = triggerRect.left - tooltipRect.width - this.options.offset;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
        left = triggerRect.right + this.options.offset;
        break;
    }
    
    // Ajuster si le tooltip sort de l'écran
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if (left < 0) left = 10;
    if (left + tooltipRect.width > viewportWidth) left = viewportWidth - tooltipRect.width - 10;
    if (top < 0) top = 10;
    if (top + tooltipRect.height > viewportHeight) top = viewportHeight - tooltipRect.height - 10;
    
    this.tooltipElement.style.position = 'fixed';
    this.tooltipElement.style.top = `${top}px`;
    this.tooltipElement.style.left = `${left}px`;
    this.tooltipElement.style.zIndex = '9999';
  }
  
  destroy() {
    if (this.showTimeout) clearTimeout(this.showTimeout);
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    
    if (this.tooltipElement) {
      this.tooltipElement.remove();
    }
    
    // Restaurer l'élément original
    this.container.parentNode.insertBefore(this.element, this.container);
    this.container.remove();
  }
}

// Fonction d'initialisation globale
window.WwTooltip = WwTooltip;

// Fonction d'initialisation automatique
window.initWwTooltips = function() {
  const tooltipElements = document.querySelectorAll('[data-ww-tooltip]');
  tooltipElements.forEach(element => {
    const content = element.getAttribute('data-ww-tooltip');
    const position = element.getAttribute('data-ww-tooltip-position') || 'top';
    const theme = element.getAttribute('data-ww-tooltip-theme') || 'dark';
    const delay = parseInt(element.getAttribute('data-ww-tooltip-delay')) || 0;
    const showArrow = element.getAttribute('data-ww-tooltip-arrow') !== 'false';
    const maxWidth = element.getAttribute('data-ww-tooltip-max-width') || '200px';
    const offset = parseInt(element.getAttribute('data-ww-tooltip-offset')) || 8;
    
    new WwTooltip(element, {
      content,
      position,
      theme,
      delay,
      showArrow,
      maxWidth,
      offset
    });
  });
};

// Auto-initialisation si le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initWwTooltips);
} else {
  window.initWwTooltips();
} 