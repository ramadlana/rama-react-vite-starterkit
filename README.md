# Get Started with this react starter kit

this starterkit use flowbite

```
npm i flowbite flowbite-react
```

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

```

this also use react icon set
`npm install react-icons`

we can use snippet react component here https://flowbite-react.com/
