---
name: ww-tooltip
description: A modern and accessible tooltip component for WeWeb applications with multiple positions, themes, and customization options
keywords: [tooltip, popup, hover, accessibility, modern, component]
---

#### WeWeb Tooltip Component

Properties:
- `content`: `string` - Tooltip content text. Default: `''`
- `position`: `string` - Tooltip position. Default: `'top'` (options: 'top', 'bottom', 'left', 'right')
- `theme`: `string` - Tooltip theme. Default: `'dark'` (options: 'dark', 'light')
- `delay`: `number` - Delay before showing tooltip in milliseconds. Default: `0`
- `showArrow`: `boolean` - Show tooltip arrow. Default: `true`
- `maxWidth`: `string` - Maximum width of tooltip. Default: `'200px'`
- `offset`: `number` - Distance between element and tooltip in pixels. Default: `8`

Events:
- show: `{}` - Triggered when tooltip becomes visible
- hide: `{}` - Triggered when tooltip is hidden

Special features:
- Multiple positions (top, bottom, left, right)
- Dark and light themes
- Customizable delay and offset
- Responsive design
- Accessibility features (ARIA attributes, keyboard support)
- Auto-positioning to prevent overflow
- Smooth animations and transitions
- HTML content support
- Arrow customization 