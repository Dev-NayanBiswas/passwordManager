### *Create Vite with React App*

npm create vite@latest . -- --template react

### *Tailwind*

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### *In tailwind.config.js file*

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 

### *In index.css File*
@tailwind base;
@tailwind components;
@tailwind utilities;




### *Library-Links*
1. ***background***  https://bg.ibelick.com/
2. ***Lord-Icon***  script src="https://cdn.lordicon.com/lordicon.js"></script
 3.  ***Font-awesome icons CDN***
  script src="https://kit.fontawesome.com/4c60d4f833.js" crossorigin="anonymous"><script
1. 
2. 


