# Guide Multilingue - Portfolio Soumana DAMA

## 🌍 Fonctionnalité Multilingue

Ce portfolio supporte maintenant deux langues :
- **Français** (langue par défaut)
- **Anglais**

## 🚀 Fonctionnalités Implémentées

### 1. Contexte de Langue
- **Fichier** : `src/contexts/LanguageContext.jsx`
- **Fonctionnalités** :
  - Gestion de l'état de la langue actuelle
  - Sauvegarde de la préférence dans localStorage
  - Hook `useLanguage()` pour accéder au contexte
  - Fonction `toggleLanguage()` pour basculer entre les langues

### 2. Système de Traductions
- **Fichier** : `src/translations/translations.js`
- **Structure** :
  ```javascript
  export const translations = {
    fr: { /* traductions françaises */ },
    en: { /* traductions anglaises */ }
  }
  ```
- **Fonction utilitaire** : `getTranslation(language, key)`

### 3. Sélecteur de Langue
- **Fichier** : `src/components/LanguageSelector.jsx`
- **Fonctionnalités** :
  - Bouton animé avec drapeaux
  - Indicateur visuel de la langue actuelle
  - Animation de rotation lors du changement

### 4. Composants Traduits

#### Navigation (`Navbar.jsx`)
- Menu de navigation traduit
- Intégration du sélecteur de langue

#### Section Hero (`Hero.jsx`)
- Salutation, titre, description
- Boutons d'action
- Message de bienvenue défilant

#### Section À Propos (`About.jsx`)
- Titre de section traduit

#### Section Formation (`Formation.jsx`)
- Titre de section traduit

#### Section Compétences (`Skills.jsx`)
- Titre de section traduit

#### Section Projets (`Projects.jsx`)
- Titre de section traduit
- Labels des boutons d'action
- Données des projets traduites (fichier séparé)

#### Section Certificats (`Certificates.jsx`)
- Titre de section traduit
- Labels des catégories

#### Section Contact (`Contact.jsx`)
- Titre de section traduit
- Labels des formulaires
- Messages de statut

#### Pied de page (`Footer.jsx`)
- Liens de navigation traduits
- Texte de copyright

### 5. Données Traduites
- **Fichier** : `src/data/projectsData.js`
- Contient les descriptions complètes des projets en français et anglais

## 🛠️ Utilisation

### Pour les Développeurs

1. **Ajouter une nouvelle traduction** :
   ```javascript
   // Dans src/translations/translations.js
   export const translations = {
     fr: {
       newSection: {
         newKey: "Texte en français"
       }
     },
     en: {
       newSection: {
         newKey: "Text in English"
       }
     }
   }
   ```

2. **Utiliser une traduction dans un composant** :
   ```javascript
   import { useLanguage } from '../contexts/LanguageContext';
   import { getTranslation } from '../translations/translations';

   const MyComponent = () => {
     const { language } = useLanguage();
     
     return (
       <h1>{getTranslation(language, 'newSection.newKey')}</h1>
     );
   };
   ```

3. **Basculer la langue** :
   ```javascript
   const { toggleLanguage } = useLanguage();
   
   // Ou définir une langue spécifique
   const { setLanguage } = useLanguage();
   setLanguage('en');
   ```

### Pour les Utilisateurs

1. **Changer de langue** :
   - Cliquer sur le sélecteur de langue dans la barre de navigation
   - Le bouton affiche le drapeau et le code de la langue actuelle
   - La préférence est sauvegardée automatiquement

2. **Langue par défaut** :
   - Le site se charge en français par défaut
   - La dernière langue sélectionnée est mémorisée

## 🧪 Tests

Un utilitaire de test est disponible dans `src/utils/testTranslations.js` :

```javascript
import { testTranslations, validateTranslationStructure } from './utils/testTranslations';

// Tester toutes les traductions
testTranslations();

// Valider la structure
validateTranslationStructure();
```

## 📁 Structure des Fichiers

```
src/
├── contexts/
│   └── LanguageContext.jsx          # Contexte de gestion de langue
├── translations/
│   └── translations.js              # Fichier principal des traductions
├── data/
│   └── projectsData.js              # Données des projets traduites
├── components/
│   ├── LanguageSelector.jsx         # Composant sélecteur de langue
│   ├── Navbar.jsx                   # Navigation traduite
│   ├── Hero.jsx                     # Section hero traduite
│   ├── About.jsx                    # Section à propos traduite
│   ├── Formation.jsx                # Section formation traduite
│   ├── Skills.jsx                   # Section compétences traduite
│   ├── Projects.jsx                 # Section projets traduite
│   ├── Certificates.jsx             # Section certificats traduite
│   ├── Contact.jsx                  # Section contact traduite
│   └── Footer.jsx                   # Pied de page traduit
└── utils/
    └── testTranslations.js          # Utilitaires de test
```

## 🎨 Personnalisation

### Ajouter une Nouvelle Langue

1. Ajouter les traductions dans `translations.js`
2. Mettre à jour le `LanguageSelector.jsx` pour inclure la nouvelle langue
3. Ajouter les données traduites dans `projectsData.js` si nécessaire

### Modifier les Traductions Existantes

Éditer directement le fichier `src/translations/translations.js` et modifier les valeurs correspondantes.

## 🚀 Déploiement

Aucune configuration supplémentaire n'est nécessaire pour le déploiement. Le système de traductions fonctionne côté client et n'a pas de dépendances externes.

## 📝 Notes Importantes

- Les traductions sont chargées de manière synchrone
- La préférence de langue est persistée dans localStorage
- Tous les textes visibles par l'utilisateur sont traduits
- Les images et médias restent les mêmes pour toutes les langues
- Le système est extensible pour ajouter d'autres langues facilement