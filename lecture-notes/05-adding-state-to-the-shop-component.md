# React Shopping Cart - Adding State to the `Shop` component

## A refresher on state
We are about to introduce state to our application, so let's take some time to review the concept. 

### State in general
**State** is data or information an application or component needs to implement its functionality. State can only be passed **down** the component hierarchy, not up. 

Examples of state include: 
* An object representing the logged-in user. 
* An array of todo objects.
* A boolean representing whether a component's detail panel should be visible. 
* A number representing the selected or current index of an item in an array.

### The difference between state and props summarized
Let's summarize the key differences between state and props: 

#### State
* State holds information owned by that component
* State can be modified with hooks
* When changed, it causes a component and all of its children and their children to re-render.

#### Props
* Props hold the information passed down the component hierarchy.
* Props cannot be modified.
* Since props cannot be changed, methods can be passed through props that will update state on the component that owns the state. 

## State in our app
In our app, we will need state for rememebering the following 
* items available in the shop (the shop's inventory)
* items in a user's inventory(their cart).

Where are we going to store our state? 

If evaluating an application's state and data structures seems complicated, that's okay - it takes a bit of experience. Soon enough, you'll be able to recognize scenarios that you've seen before and apply those previous data structures and patterns. 

### Initializing state
Let's begin by importing `useState` in `Shop.jsx`

```jsx
import { useState } from 'react';
```

Next, we'll want to make some changes to `Shop.jsx`.

Create a new `useState()` variable called `inventory` and set the initial state to `inventoryData`. Then, we'll pass the `inventory` state down as props to the `InventoryList`

The component should look like this when we're done: 

```jsx
import { useState } from 'react';

import InventoryList from '../../components/InventoryList/InventoryList';

import { inventoryList } from '../../data/data';

const Shop = () => {
    const [inventory, setInventory] = useState(inventoryList);

    return (
        <main>
        <h1>Shop</h1>
        <InventoryList inventory={inventory} />
        </main>
    );
};

export default Shop;
```

Check the browser. You'll see the same list of inventory items as before, but the source of this information is now a `useState()` variable called `inventory`, as opposed to the hardcoded `inventoryData` we were rendering earlier. 

Here's a visual diagram for our components so far :

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/lifting-state-with-arrays-in-react-shopping-cart/adding-state-to-the-shop-component/assets/adding-state-chd.png)