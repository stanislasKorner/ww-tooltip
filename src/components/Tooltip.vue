<template>
  <div 
    class="ww-tooltip-container"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @focus="showTooltip"
    @blur="hideTooltip"
  >
    <div 
      ref="trigger"
      class="ww-tooltip-trigger"
    >
      <slot></slot>
    </div>
    
    <transition name="ww-tooltip">
      <div
        v-if="isVisible"
        ref="tooltip"
        class="ww-tooltip"
        :class="[
          `ww-tooltip--${position}`,
          `ww-tooltip--${theme}`,
          { 'ww-tooltip--arrow': showArrow }
        ]"
        :style="tooltipStyles"
        role="tooltip"
        :aria-describedby="tooltipId"
      >
        <div class="ww-tooltip-content">
          <slot name="content">
            {{ content }}
          </slot>
        </div>
        <div 
          v-if="showArrow"
          class="ww-tooltip-arrow"
          :class="`ww-tooltip-arrow--${position}`"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WwTooltip',
  props: {
    content: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'top',
      validator: value => ['top', 'bottom', 'left', 'right'].includes(value)
    },
    theme: {
      type: String,
      default: 'dark',
      validator: value => ['dark', 'light'].includes(value)
    },
    delay: {
      type: Number,
      default: 0
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    maxWidth: {
      type: String,
      default: '200px'
    },
    offset: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      isVisible: false,
      tooltipId: `ww-tooltip-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      showTimeout: null,
      hideTimeout: null
    };
  },
  computed: {
    tooltipStyles() {
      return {
        '--ww-tooltip-max-width': this.maxWidth,
        '--ww-tooltip-offset': `${this.offset}px`
      };
    }
  },
  methods: {
    showTooltip() {
      if (this.showTimeout) {
        clearTimeout(this.showTimeout);
      }
      
      this.showTimeout = setTimeout(() => {
        this.isVisible = true;
        this.$nextTick(() => {
          this.positionTooltip();
        });
      }, this.delay);
    },
    
    hideTooltip() {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
      }
      
      this.hideTimeout = setTimeout(() => {
        this.isVisible = false;
      }, 100);
    },
    
    positionTooltip() {
      if (!this.$refs.tooltip || !this.$refs.trigger) return;
      
      const trigger = this.$refs.trigger.getBoundingClientRect();
      const tooltip = this.$refs.tooltip;
      const tooltipRect = tooltip.getBoundingClientRect();
      
      let top, left;
      
      switch (this.position) {
        case 'top':
          top = trigger.top - tooltipRect.height - this.offset;
          left = trigger.left + (trigger.width / 2) - (tooltipRect.width / 2);
          break;
        case 'bottom':
          top = trigger.bottom + this.offset;
          left = trigger.left + (trigger.width / 2) - (tooltipRect.width / 2);
          break;
        case 'left':
          top = trigger.top + (trigger.height / 2) - (tooltipRect.height / 2);
          left = trigger.left - tooltipRect.width - this.offset;
          break;
        case 'right':
          top = trigger.top + (trigger.height / 2) - (tooltipRect.height / 2);
          left = trigger.right + this.offset;
          break;
      }
      
      // Ajuster si le tooltip sort de l'écran
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      if (left < 0) left = 10;
      if (left + tooltipRect.width > viewportWidth) left = viewportWidth - tooltipRect.width - 10;
      if (top < 0) top = 10;
      if (top + tooltipRect.height > viewportHeight) top = viewportHeight - tooltipRect.height - 10;
      
      tooltip.style.position = 'fixed';
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
      tooltip.style.zIndex = '9999';
    }
  },
  
  beforeDestroy() {
    if (this.showTimeout) clearTimeout(this.showTimeout);
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
  }
};
</script> 