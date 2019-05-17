# Tutorial NextJS

## Lesson 00 | Präsentation
* [Präsentation](nextjs.pptx)

## Lesson 01 | Demo
Dieser Step zeigt eine Beispielapplikation, wie wir sie bisher entwickelt hätte.
Dabei verwenden wir Routing auf Clientseite mit Hilfe des [`react-router` Paketes](https://github.com/ReactTraining/react-router)

## Lesson 02 | NextJS aufsetzen
### Vorbereitungen
* TypeScript
  * `npm install --save-dev typescript`
  * 
  ```json
  {
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve",
    "lib": ["dom", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "preserveConstEnums": true,
    "removeComments": false,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "target": "esnext"
  }
}```

* React
  * `npm install --save react react-dom @types/react @types/react-dom`
* NextJS
  * `npm install --save next @types/next`
  * `npm install --save @zeit/next-typescript`
  * 
  ```json
  {
  "presets": [
    "next/babel",
    "@zeit/next-typescript/babel"
  ]
}```

### Struktur aufbauen
* `src` Ordner anlegen
* `src\pages` Ordner anlegen
* `src\next.config.js` anlegen
  * 
```javascript
  // next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack(config, options) {
    return config
  }
})
```
* Scripts pflegen
```json
"scripts": {
    "dev": "next src",
    "build": "next build src",
    "start": "next start src",
    "now-build": "next build src"
}
```
* Pages anlegen
  * Index
  * Nice
  * Shit

## Lesson 03 | CSS Modules verwenden
* `npm install --save-dev next-compose-plugins`
* `npm install --save-dev @zeit/next-css`
* `src\next.config.js` anpassen
```javascript
// imports
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

// next config
const nextConfig = {
  distDir: './../.next',
  target: 'serverless'
};

// ship it together with plugins
module.exports = withPlugins(
    [
        // TypeScript Support
        withTypescript,
        // CSS Support
        [
            withCSS ,
            {
                cssModules: true
            }
        ]
    ], 
    nextConfig
);
```
* `nice.css` & `shit.css` anlegen und füllen

## Lesson 04 | Navigation, Head & Layout Components
* `src\components\page` anlegen
  * `page.tsx` und `page.css` anlegen
* Grundlegende `page.tsx` entwickeln
* Grundlegende `page.css` entwickeln
* Page überall verwenden
* Head Bereich mit `title` und globalen Styles pflegen
* Navigation einbauen

## Lesson 05 | 404 Seite
* `src\pages\_error.tsx` anlegen und füllen
* [Mehr Infos hier](https://github.com/zeit/next.js#custom-error-handling)

## Lesson 06 | Generisches Routing
### Mit Parametern
* `src\pages\club.tsx` anlegen und grundlegend füllen
* `club.tsx` mit sinnvollem Inhalt füllen und auf withRouter umstellen
* `page.tsx` anpassen

### Route Masking
* `page.tsx` Link anpassen
* Auf Clean Routing verweisen

## Optionale Lessons
* Authentifizierung 
* Clean Routing