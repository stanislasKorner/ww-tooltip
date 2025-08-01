<template>
  <div class="ww-tooltip">
    <div class="tooltip-content">
      {{ content?.content || 'Tooltip content' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true }
  }
};
</script>

<style scoped>
.ww-tooltip {
  padding: 10px;
  background: #333;
  color: white;
  border-radius: 4px;
  font-size: 14px;
}

.tooltip-content {
  text-align: center;
}
</style> 