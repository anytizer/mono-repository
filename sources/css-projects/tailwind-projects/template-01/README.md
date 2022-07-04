https://tailwindcss.com/docs/installation

npm install -D tailwindcss
npx tailwindcss init

tailwind.config.js: content: ["./www/**/*.{html,js}"],

npx tailwindcss -i ./src/project.css -o ./dist/project.css --watch

@tailwind base;
@tailwind components;
@tailwind utilities;

.button { @apply md; }