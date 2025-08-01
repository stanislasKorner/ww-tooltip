# WeWeb Tooltip Component

Un composant tooltip moderne et accessible pour WeWeb, inspiré du design de shadcn/ui.

## Installation

1. Clonez ce repository
2. Installez les dépendances : `npm install`
3. Construisez le composant : `npm run build`
4. Importez le fichier `dist/ww-tooltip.js` dans votre projet WeWeb

## Utilisation

### Utilisation avec attributs data (recommandé)

```html
<button data-ww-tooltip="Ceci est un tooltip">
  Survolez-moi
</button>
```

### Utilisation programmatique

```javascript
const button = document.querySelector('button');
new WwTooltip(button, {
  content: 'Ceci est un tooltip',
  position: 'top',
  theme: 'dark'
});
```

## Attributs data disponibles

| Attribut | Type | Défaut | Description |
|----------|------|--------|-------------|
| `data-ww-tooltip` | String | - | Contenu du tooltip (requis) |
| `data-ww-tooltip-position` | String | `'top'` | Position (`top`, `bottom`, `left`, `right`) |
| `data-ww-tooltip-theme` | String | `'dark'` | Thème (`dark`, `light`) |
| `data-ww-tooltip-delay` | Number | `0` | Délai avant affichage (en millisecondes) |
| `data-ww-tooltip-arrow` | Boolean | `true` | Afficher la flèche (`true`/`false`) |
| `data-ww-tooltip-max-width` | String | `'200px'` | Largeur maximale du tooltip |
| `data-ww-tooltip-offset` | Number | `8` | Distance entre l'élément et le tooltip (en pixels) |

## Exemples

### Tooltip avec position personnalisée

```html
<button data-ww-tooltip="Tooltip à droite" data-ww-tooltip-position="right">
  Tooltip à droite
</button>
```

### Tooltip avec thème clair

```html
<button data-ww-tooltip="Thème clair" data-ww-tooltip-theme="light">
  Thème clair
</button>
```

### Tooltip avec délai

```html
<button data-ww-tooltip="Délai de 500ms" data-ww-tooltip-delay="500">
  Délai
</button>
```

### Tooltip sans flèche

```html
<button data-ww-tooltip="Sans flèche" data-ww-tooltip-arrow="false">
  Sans flèche
</button>
```

### Contenu HTML

```html
<button data-ww-tooltip="<strong>Gras</strong><br><em>Italique</em><br>🎉">
  HTML
</button>
```

## Options programmatiques

```javascript
new WwTooltip(element, {
  content: 'Contenu du tooltip',
  position: 'top', // 'top', 'bottom', 'left', 'right'
  theme: 'dark', // 'dark', 'light'
  delay: 0,
  showArrow: true,
  maxWidth: '200px',
  offset: 8
});
```

## Accessibilité

Le composant inclut :
- Support du clavier (focus/blur)
- Attributs ARIA appropriés
- Navigation au clavier
- Contraste de couleurs approprié

## Compatibilité

- WeWeb
- Navigateurs modernes (ES6+)
- Pas de dépendance externe

## Licence

MIT 