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

### Icons

doc = lord-icon
    src="https://cdn.lordicon.com/lewtedlh.json"
    trigger="hover"
    stroke="light"
    state="hover-pinch"
    colors="primary:#3080e8,secondary:#b4b4b4"
    style="width:250px;height:250px">
    </lord-icon

email-filled = src="https://media.lordicon.com/icons/system/solid/190-mail-envelope-open.json"
email-outline = src="https://media.lordicon.com/icons/system/regular/190-mail-envelope-open.json"


pen-filled = src="https://media.lordicon.com/icons/system/solid/114-edit-pencil-rename.json"
pen-outline = src="https://media.lordicon.com/icons/system/regular/114-edit-pencil-rename.json"

email-close = src="https://media.lordicon.com/icons/system/solid/191-mail-envelope-close.json"

### Toastify

-> npm install --save react-toastify

 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
***
toast.success(`👍 ${data} Copied Successfully !`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition:Flip
            });
***
  ToastContainer
                position="topRight"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
***
