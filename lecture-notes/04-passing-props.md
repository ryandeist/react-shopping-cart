# React Shopping Cart - Passing Props

## What are props? 
A parent component uses props to pass data/state and references to methods down to child components. A prop looks much like an `attribute=value` pair in an HTML element. We use camelCase to name our props instead of the kebab-casing preferred in HTML 
> Note that its' common to pass the same data as a prop, over and over, down the component hierarchy. 

### Passing props
You must use curly braces to pass any value other than a simple string (even template literals must be surrounded by curly braces).

Just like Chrome's DevTools are invaluable when troubleshooting the DOM, so are React's Developer Tools when it comes to troubleshooting a React app. 

With the Chrome extension installed, you will see a **Components** tab in Chrome's DevTools! 

### Accessing passed props
When React renders a Functional Component, it will always pass in props as the first argument to the function. As a result, we can always access props as a parameter like so: 

```jsx
const ComponentName = (props) => (
    ...

)
```

### Props cannot be changed
Props are immutable; their values can never be changed. 

Remember , the prop came from a component somewhere up in the hierarchy, and if the prop's value originated from state, it would be **that** components responsibility to update its state. 

### Working with props 
Let's move some of the code we wrote in `Shop.jsx` to a new component. This will help keep out application organized and make our code more reusable. 

Run the following commands in the terminal: 

```
mkdir src/components/InventoryList
touch src/components/InventoryList/InventoryList.jsx
```

Add the following to `InventoryList.jsx`:

```jsx
const InventoryList = (props) => {
    return (
        <div>
            <h2>Inventory List</h2>
            <ul>
            {props.inventoryData.map((item) => (
                <li key={item._id}>
                    <p>{item.name}</p>
                    <p>Price: {item.price}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default InventoryList
```

Back in `Shop.jsx`, import the newly created `InventoryList` component: 

```jsx
import InventoryList from '../../components/InventoryList/InventoryList';
```

Add the `InventoryList` component within the `main` tag, and pass it an `inventory` prop with a value set to `inventoryData` (this approach will make more sense in the next few steps)

```jsx 
import InventoryList from '../../components/InventoryList/InventoryList'

import { inventoryData } from '../../data/data'

const Shop = () => {
    return (
        <main>
            <h1>Shop</h1>
            <InventoryList inventory={inventoryData} />
        </main>
    );
};

export default Shop;
```

After verifying that `props` are being passed down correctly, `map` through `props.inventory` to produce an array of `li` tags in `InventoryList.jsx`:

```jsx
const InventoryList = (props) => {
    return (
    <div>
        <h2>Inventory List</h2>
        <ul>
        {props.inventory.map((item) => (
            <li key={item._id}>
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
            </li>
        ))}
        </ul>
    </div>
    );
};
```

Currently, there is no way for a user to make changes to the inventory list, as we are rendering a hardcoded array of objects. 

If we want our components to remember the changes a user makes to the inventory list between renders, we'll need to use state. 