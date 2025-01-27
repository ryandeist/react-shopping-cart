# React Shopping Cart - Setup

## Setup
Open your Terminal application and navigate to your `~/code/ga/lectures` directory:

```
cd ~/code/ga/lectures
```

Create a new Vite project for your React app:

```
npm create vite@latest
```

You’ll be prompted to choose a project name. Let’s name it `react-shopping-cart`.

* Select a framework. Use the arrow keys to choose the `React` option and hit `Enter`.
* Select a variant. Again, use the arrow keys to choose `JavaScript` and hit `Enter`.

Navigate to your new project directory and install the necessary dependencies:

```
cd react-shopping-cart
npm i
```

Open the project’s folder in your code editor:

```
code .
```

### Configuring ESLint
Before we begin, we need to adjust the ESLint configuration. Add the indicated rules to the `rules` object in your `eslint.config.js` file:

```js
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off', // add this line
      'react/no-unescaped-entities': 'off', // add this line
    },
```

The first addition prevents warnings if you don’t declare types for your props (which we’re not), and the second prevents warnings if you use contractions within JSX.

### Clear `App.jsx`
Open the `App.jsx` file in the `src` directory and replace the contents of it with the following:

```jsx
// src/App.jsx

const App = () => {

  return (
    <h1>Hello world!</h1>
  );
}

export default App
```

### Running the development server
To start the development server and view our app in the browser, we’ll use the following command:

```
npm run dev
```

You should see that `Vite` is available on port number `5173`:

```
localhost:5173
```
Navigate there, and you should see the `<h1>` from our `App.jsx` component displayed!

### GitHub setup
To add this project to GitHub, initialize a Git repository:

```
git init
git add .
git commit -m "init commit"
```

Make a new repository on GitHub named `react-shopping-cart`.

Link your local project to your remote GitHub repo:

```
git remote add origin https://github.com/<github-username>/react-shopping-cart.git
git push origin main
```
> 🚨 Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>` (including the < and >) in the URL above.