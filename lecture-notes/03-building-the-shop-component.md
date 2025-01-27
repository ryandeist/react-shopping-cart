# React Shopping Cart - Building the `Shop` component

## Build the `Shop` component
Let's begin by creating the `Shop` component. Run the following commands in your terminal.

```
mkdir src/components src/components/Shop
touch src/components/Shop/Shop.jsx
```

In `App.jsx`, import the newly created `Shop` component and add it inside a `return`

```jsx
// src/App.jsx

// components
import Shop from './components/Shop/Shop';

// css
import './App.css';

function App() {
  return <Shop />;
}

export default App;
```

If you start the application now, you should be able to see the `h1` from our shop component. 

## Review of built-in vs. user-defined components
As we've seen, React has several build in components, such a `<input />`, that map to HTML elements. These built-in components are the only ones that emit DOM elements in the browser document. These components are often called React Elements. 

React components aare lowercase, for example, `<div>`. User-defined components, like `<NavBar>`, are capitalized.

User-defined components may consist of any other user-defined components or React Elements. 

## Working with data
Let's get a sense of the data we'll work with in the `Shop` component. Take a moment to study the `inventoryData` array shown below. Next, we must add it to our application and import it withing the appropriate component. 

Run the following commands in the terminal: 


```
mkdir src/data
touch src/data/data.js
```

Add the following to `src/data/data.js`:

```jsx
// src/data/data.js

export const inventoryData = [
  { _id: 62345, name: 'Banana', price: 0.27 },
  { _id: 22345, name: 'Avocado', price: 2 },
  { _id: 82345, name: 'Yellow Onion', price: 0.5 },
  { _id: 15345, name: 'English Cucumber', price: 1.5 },
  { _id: 12445, name: 'Local Organic Free Range Eggs', price: 6 },
  { _id: 12545, name: 'Milk', price: 2.79 },
  { _id: 12745, name: 'Cauliflower Head', price: 3 },
  { _id: 72345, name: 'Flour Tortillas', price: 3 },
  { _id: 92345, name: 'Butter', price: 4 },
  { _id: 16345, name: 'Cherry Tomatoes', price: 3 },
  { _id: 52345, name: 'Cantaloupe', price: 3.29 },
  { _id: 42345, name: 'Chicken Breast', price: 12 },
  { _id: 32345, name: 'Whole Roasted Chicken', price: 10.99 },
  { _id: 12645, name: 'Ground Beef', price: 9 },
  { _id: 12945, name: 'Pasta Sauce', price: 2.49 },
  { _id: 55555, name: 'Penne Rigate Pasta', price: 1.25 },
  { _id: 13345, name: 'Spaghetti Pasta', price: 2 },
  { _id: 12845, name: 'Ketchup ', price: 3.49 },
  { _id: 19345, name: 'Yellow Mustard', price: 2.19 },
  { _id: 18345, name: 'Mayonnaise', price: 4 },
  { _id: 10002, name: 'Bread', price: 2 },
  { _id: 17345, name: 'Peanut Butter', price: 4.19 },
  { _id: 10001, name: 'Swiss Cheese', price: 3.99 },
  { _id: 85325, name: 'Shredded Mozzarella', price: 4.19 },
  { _id: 14345, name: 'Steelhead Trout Fillet', price: 11.99 },
];
```

Within `Shop.jsx`, import the `inventoryData` and verify that it is available in the component with a console.log: 

```jsx
import { inventoryData } from '../../data/data';

const Shop = () => {
    console.log(inventoryData)
    return (
        <>
            <Shop />
        </>
    )
}

export default Shop;
```

## Displaying Data 
Next, we'll need to display this data on the page. To do so, we'll `map` through the `inventoryData` and prodice an `<li>` tag for each object in the `inventoryData` array

Mapping in React can be confusing. Let's try to visualize the process. 

When we `map` in React, we can take an array of objects like this: 

```
[{}, {}, {}];
```

And produce a collection of HTML elements like this: 

```
<li></li>
<li></li>
<li></li>
```

Add the following to `Shop.jsx`:

```jsx
import { inventoryData } from '../../data/data';

const Shop = () => {
    return (
        <main>
            <h1>Shop</h1>
            <ul>
                {inventoryData.map((item) => (
                    <li key={item._id}>
                        <p>{item.name}</p>
                        <p>Price: {item.price}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export defualt Shop;
```

Check the browser. You should now see a list of items. This works fine, but we'll probably want to move some of this code to another components. In doing so, we'll need to start working with `props`.