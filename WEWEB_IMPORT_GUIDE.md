# Guide d'importation WeWeb

## Comment importer ce composant dans WeWeb

### Étape 1 : Télécharger le composant

1. Allez sur votre repository GitHub
2. Téléchargez le fichier `dist/ww-tooltip.js`
3. Ou clonez le repository et exécutez `npm run build`

### Étape 2 : Importer dans WeWeb

1. Ouvrez votre projet WeWeb
2. Allez dans **Settings** > **Custom Code**
3. Dans la section **JavaScript**, ajoutez le contenu du fichier `ww-tooltip.js`

### Étape 3 : Utilisation

#### Méthode 1 : Attributs data (recommandée)

```html
<!-- Dans un élément HTML de WeWeb -->
<button data-ww-tooltip="Ceci est un tooltip">
  Survolez-moi
</button>
```

#### Méthode 2 : Programmatique

```javascript
// Dans le JavaScript de WeWeb
const button = document.querySelector('button');
new WwTooltip(button, {
  content: 'Tooltip personnalisé',
  position: 'top',
  theme: 'dark'
});
```

### Étape 4 : Options disponibles

| Attribut | Description | Exemple |
|----------|-------------|---------|
| `data-ww-tooltip` | Contenu du tooltip | `"Mon tooltip"` |
| `data-ww-tooltip-position` | Position | `"top"`, `"bottom"`, `"left"`, `"right"` |
| `data-ww-tooltip-theme` | Thème | `"dark"`, `"light"` |
| `data-ww-tooltip-delay` | Délai (ms) | `"500"` |
| `data-ww-tooltip-arrow` | Afficher flèche | `"true"`, `"false"` |
| `data-ww-tooltip-max-width` | Largeur max | `"300px"` |
| `data-ww-tooltip-offset` | Distance | `"10"` |

### Exemples d'utilisation dans WeWeb

#### Bouton avec tooltip
```html
<button 
  data-ww-tooltip="Cliquez pour en savoir plus" 
  data-ww-tooltip-position="top"
  data-ww-tooltip-theme="dark">
  En savoir plus
</button>
```

#### Icône avec tooltip
```html
<i 
  class="fas fa-info-circle" 
  data-ww-tooltip="Informations supplémentaires"
  data-ww-tooltip-position="right"
  data-ww-tooltip-delay="200">
</i>
```

#### Lien avec tooltip HTML
```html
<a 
  href="#" 
  data-ww-tooltip="<strong>Important</strong><br>Cliquez pour continuer"
  data-ww-tooltip-theme="light">
  Continuer
</a>
```

### Dépannage

#### Le tooltip ne s'affiche pas
- Vérifiez que le fichier JavaScript est bien importé
- Ouvrez la console du navigateur pour voir les erreurs
- Assurez-vous que l'élément a bien l'attribut `data-ww-tooltip`

#### Le tooltip sort de l'écran
- Le composant ajuste automatiquement la position
- Vous pouvez modifier l'`offset` pour plus d'espace

#### Style personnalisé
- Les styles sont inclus dans le fichier JavaScript
- Vous pouvez surcharger les styles CSS si nécessaire

### Support

Si vous rencontrez des problèmes :
1. Vérifiez la console du navigateur
2. Testez avec la page de démonstration (`demo.html`)
3. Créez une issue sur GitHub 