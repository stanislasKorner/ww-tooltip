export default {
  editor: {
    label: {
      en: 'Tooltip Component',
    },
    icon: 'info',
  },
  properties: {
    content: {
      label: { en: 'Tooltip Content' },
      type: 'Text',
      bindable: true,
      defaultValue: 'This is a tooltip',
      section: 'settings',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string that defines the tooltip content',
      },
      propertyHelp: {
        tooltip: 'The text content displayed in the tooltip',
      },
      /* wwEditor:end */
    },
    position: {
      label: { en: 'Position' },
      type: 'Select',
      bindable: true,
      defaultValue: 'top',
      section: 'settings',
      options: {
        options: [
          { label: 'Top', value: 'top' },
          { label: 'Bottom', value: 'bottom' },
          { label: 'Left', value: 'left' },
          { label: 'Right', value: 'right' }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string that defines the tooltip position',
      },
      propertyHelp: {
        tooltip: 'The position of the tooltip relative to the element',
      },
      /* wwEditor:end */
    },
    theme: {
      label: { en: 'Theme' },
      type: 'Select',
      bindable: true,
      defaultValue: 'dark',
      section: 'style',
      options: {
        options: [
          { label: 'Dark', value: 'dark' },
          { label: 'Light', value: 'light' }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string that defines the tooltip theme',
      },
      propertyHelp: {
        tooltip: 'The visual theme of the tooltip',
      },
      /* wwEditor:end */
    },
    delay: {
      label: { en: 'Delay' },
      type: 'Number',
      bindable: true,
      defaultValue: 0,
      section: 'settings',
      options: {
        min: 0,
        max: 2000,
        step: 100
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'A number that defines the delay before showing the tooltip',
      },
      propertyHelp: {
        tooltip: 'The delay in milliseconds before the tooltip appears',
      },
      /* wwEditor:end */
    },
    showArrow: {
      label: { en: 'Show Arrow' },
      type: 'OnOff',
      bindable: true,
      defaultValue: true,
      section: 'settings',
      /* wwEditor:start */
      bindingValidation: {
        type: 'boolean',
        tooltip: 'A boolean that defines if the tooltip arrow is shown',
      },
      propertyHelp: {
        tooltip: 'Whether to show the arrow pointing to the element',
      },
      /* wwEditor:end */
    },
    maxWidth: {
      label: { en: 'Max Width' },
      type: 'Text',
      bindable: true,
      defaultValue: '200px',
      section: 'settings',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'A string that defines the maximum width of the tooltip',
      },
      propertyHelp: {
        tooltip: 'The maximum width of the tooltip (e.g., "200px", "50%")',
      },
      /* wwEditor:end */
    },
    offset: {
      label: { en: 'Offset' },
      type: 'Number',
      bindable: true,
      defaultValue: 8,
      section: 'settings',
      options: {
        min: 0,
        max: 50,
        step: 1
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'A number that defines the distance between element and tooltip',
      },
      propertyHelp: {
        tooltip: 'The distance in pixels between the element and tooltip',
      },
      /* wwEditor:end */
    }
  },
  triggerEvents: [
    {
      name: 'show',
      label: { en: 'On tooltip show' },
      event: {}
    },
    {
      name: 'hide',
      label: { en: 'On tooltip hide' },
      event: {}
    }
  ]
}; 