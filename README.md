# Rick and Morty App

## Descripción
Esta app consume la API pública de Rick and Morty para mostrar la lista de personajes, permitiendo:

- Buscar personajes por nombre.
- Navegar entre páginas de resultados.
- Ver detalles de cada personaje en una página dedicada.

API oficial Rick y Morty: https://rickandmortyapi.com

## Instalación

1. Clonar el repositorio
   https://github.com/KarenACC/prueba-sac-karencastro.git

2. Instalar dependencias
   npm install
   o
   yarn 

## Ejecución
1. Ejecutar en modo desarrollo 
   npm run dev
   o
   yarn dev

2. Abrir http://localhost:5173 para ver la app.

## Testing
Las pruebas están ubicadas en la carpeta src/tests.

Para ejecutar las pruebas, usa:
   npm run test


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

