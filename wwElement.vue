<template>
  <div 
    class="ww-tooltip-wrapper"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @focus="showTooltip"
    @blur="hideTooltip"
  >
    <div class="ww-tooltip-trigger">
      <slot></slot>
    </div>
    
    <transition name="ww-tooltip">
      <div
        v-if="isVisible"
        ref="tooltip"
        class="ww-tooltip"
        :class="[
          `ww-tooltip--${content?.position || 'top'}`,
          `ww-tooltip--${content?.theme || 'dark'}`,
          { 'ww-tooltip--arrow': content?.showArrow !== false }
        ]"
        :style="tooltipStyles"
        role="tooltip"
        :aria-describedby="tooltipId"
      >
        <div class="ww-tooltip-content">
          {{ content?.content || 'This is a tooltip' }}
        </div>
        <div 
          v-if="content?.showArrow !== false"
          class="ww-tooltip-arrow"
          :class="`ww-tooltip-arrow--${content?.position || 'top'}`"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';

export default {
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true }
  },

  setup(props, { emit }) {
    const tooltip = ref(null);
    const isVisible = ref(false);
    const tooltipId = ref(`ww-tooltip-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
    const showTimeout = ref(null);
    const hideTimeout = ref(null);

    const tooltipStyles = computed(() => ({
      '--ww-tooltip-max-width': props.content?.maxWidth || '200px',
      '--ww-tooltip-offset': `${props.content?.offset || 8}px`
    }));

    const showTooltip = () => {
      if (showTimeout.value) {
        clearTimeout(showTimeout.value);
      }
      
      showTimeout.value = setTimeout(() => {
        isVisible.value = true;
        emit('trigger-event', {
          name: 'show',
          event: {}
        });
      }, props.content?.delay || 0);
    };

    const hideTooltip = () => {
      if (hideTimeout.value) {
        clearTimeout(hideTimeout.value);
      }
      
      hideTimeout.value = setTimeout(() => {
        isVisible.value = false;
        emit('trigger-event', {
          name: 'hide',
          event: {}
        });
      }, 100);
    };

    const positionTooltip = () => {
      if (!tooltip.value) return;
      
      const trigger = tooltip.value.parentElement;
      const tooltipRect = tooltip.value.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      
      let top, left;
      const position = props.content?.position || 'top';
      const offset = props.content?.offset || 8;
      
      switch (position) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - offset;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          break;
        case 'bottom':
          top = triggerRect.bottom + offset;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          break;
        case 'left':
          top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          left = triggerRect.left - tooltipRect.width - offset;
          break;
        case 'right':
          top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          left = triggerRect.right + offset;
          break;
      }
      
      // Adjust if tooltip goes off screen
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      if (left < 0) left = 10;
      if (left + tooltipRect.width > viewportWidth) left = viewportWidth - tooltipRect.width - 10;
      if (top < 0) top = 10;
      if (top + tooltipRect.height > viewportHeight) top = viewportHeight - tooltipRect.height - 10;
      
      tooltip.value.style.position = 'fixed';
      tooltip.value.style.top = `${top}px`;
      tooltip.value.style.left = `${left}px`;
      tooltip.value.style.zIndex = '9999';
    };

    onMounted(() => {
      // Position tooltip when it becomes visible
      if (isVisible.value) {
        positionTooltip();
      }
    });

    onUnmounted(() => {
      if (showTimeout.value) clearTimeout(showTimeout.value);
      if (hideTimeout.value) clearTimeout(hideTimeout.value);
    });

    return {
      tooltip,
      isVisible,
      tooltipId,
      tooltipStyles,
      showTooltip,
      hideTooltip
    };
  }
};
</script>

<style lang="scss" scoped>
.ww-tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.ww-tooltip-trigger {
  display: inline-block;
}

.ww-tooltip {
  position: absolute;
  max-width: var(--ww-tooltip-max-width, 200px);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
  word-wrap: break-word;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  pointer-events: none;
  user-select: none;
  z-index: 9999;
}

/* Theme styles */
.ww-tooltip--dark {
  background-color: #1f2937;
  color: #f9fafb;
  border: 1px solid #374151;
}

.ww-tooltip--light {
  background-color: #ffffff;
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

/* Arrow styles */
.ww-tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
}

.ww-tooltip-arrow--top {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid;
}

.ww-tooltip-arrow--bottom {
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid;
}

.ww-tooltip-arrow--left {
  right: -4px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid;
}

.ww-tooltip-arrow--right {
  left: -4px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: 4px solid;
}

/* Arrow colors for themes */
.ww-tooltip--dark .ww-tooltip-arrow--top {
  border-top-color: #1f2937;
}

.ww-tooltip--dark .ww-tooltip-arrow--bottom {
  border-bottom-color: #1f2937;
}

.ww-tooltip--dark .ww-tooltip-arrow--left {
  border-left-color: #1f2937;
}

.ww-tooltip--dark .ww-tooltip-arrow--right {
  border-right-color: #1f2937;
}

.ww-tooltip--light .ww-tooltip-arrow--top {
  border-top-color: #ffffff;
}

.ww-tooltip--light .ww-tooltip-arrow--bottom {
  border-bottom-color: #ffffff;
}

.ww-tooltip--light .ww-tooltip-arrow--left {
  border-left-color: #ffffff;
}

.ww-tooltip--light .ww-tooltip-arrow--right {
  border-right-color: #ffffff;
}

/* Animation transitions */
.ww-tooltip-enter-active,
.ww-tooltip-leave-active {
  transition: all 0.15s ease-in-out;
}

.ww-tooltip-enter,
.ww-tooltip-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.ww-tooltip-enter-to,
.ww-tooltip-leave {
  opacity: 1;
  transform: scale(1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .ww-tooltip {
    max-width: 150px;
    font-size: 13px;
    padding: 6px 10px;
  }
}

/* Focus styles for accessibility */
.ww-tooltip-wrapper:focus-within .ww-tooltip {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style> 