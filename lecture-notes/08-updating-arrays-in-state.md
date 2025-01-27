# React Shopping Cart - Updating Arrays in State
> Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. Like with objects, when you want to update an array stored in state, you need to create a new one (or copy and existing one) and then set state to use the new array.

Checko out the React docs on `Updating Arrays in State` for more info. 

### Adding to an array
In our app, users will have the ability to select items from the shop's inventory and add them to their own inventory. When an item is added to the user's cart, it should be removed from the shop's inventory. 

Add the following to `Shop.jsx`:

```jsx
const handleAddItem = (item) => {
    setUserInventory([...userInventory, item]);
    setShopInventory(shopInventory.filter((el) => el._id !== item._id));
};
```

Let's break down what is going on in the function above: 
* The function accepts an `item` object as an argument. We must rememeber to pass in this argument when we call upon the `handleAddItem()` function. 
* Notice the use of the spread operator. When we call `setUserInventory()` to change the `userInventory` state to a new array, we use the spread syntax to copy the contents of the existing `userInventory` array.

    The new array set to state includes the existing contents, along with the new `item` added to the end of the array. 
* Notice the use of the filter method here. Remember, the `filter()` method returns a shallow copy of the filtered array. When we call `setShopInventory()`, the array stored in state will include all of the `item` objects whose `_id` does not match the `_id` of the selected `item`

Pass the function down to the `InventoryList` component that displays the shops inventory: 

```jsx
// src/components/Shop/Shop.jsx

return (
  <main>
    <h1>Shop</h1>
    <section className="shop-section">
      <InventoryList
        title="Shop Inventory"
        inventory={shopInventory}
        handleAddItem={handleAddItem}
      />
      <InventoryList title="User Inventory" inventory={userInventory} />
    </section>
  </main>
);
```

### Conditional Rendering
Next, we'll need to conditionally render some buttons! At the moment, we have two instances of `InventoryList`. One instance of this component needs to display an **Add Item** button while the other needs to display a **Remove Item** button. 

We'll be able to identify which `<button>` the component instance should display based on the `handleAddItem()` prop.

Take a look at this ternary

```jsx
{
    props.handleAddItem ? (
        <button>Add Item</button>
    ) : (
        <button>Remove Item</button>
    );
}
```

What is this accomplishing? If the `handleAddItem()` function has been passed down to this component instance, it should display the **Add Item** button. Otherwise, it should display the **Remove Item** button. 

Add the ternary to `InventoryList.jsx`

```jsx
// src/components/InventoryList/InventoryList.jsx

const InventoryList = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.inventory.map((item) => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>

            {props.handleAddItem ? (
              <button>Add Item</button>
            ) : (
              <button>Remove Item</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
```

### Adding the event handler
Update the **Add Item** button with an `onClick` event handler that calls upon `handleAddItem()`.

Be sure to pass in the `item` object as an argument. 

```jsx
// src/components/InventoryList/InventoryList.jsx

<button onClick={() => props.handleAddItem(item)}>
    Add Item
</button>
```

Notice how we pass an `item` argument to the `handleAddItem()` function. When we pass a value to a function, we need to invoke the function. Invoking a function within an event handler will cause that function to run when the page loads. Wrapping it with an anonymous callback will prevent this behavior.

In short, the anonymous function ensures that `handleAddItem()` only runs on a click while allowing us to pass the function an argument. 

Check the browser. You should now be able to add items from the shop inventory to your cart.

### Removing items from an array
Add the following to `Shop.jsx`. Like the `handleAddItem()` function, when an item is removed from the user's inventory, it should be added to the shop's inventory. 

```jsx
const handleRemoveItem = (item) => {
    setShopInventory([...shopInventory, item]);
    setUserInventory(userInventory.filter((el) => el._id !== item._id));
}
```

Pass the funtion down to the `InventoryList` component that displays the users inventory.

```jsx
// src/components/Shop/Shop.jsx

return (
  <main>
    <h1>Shop</h1>
    <section className="shop-section">
      <InventoryList
        title="Shop Inventory"
        inventory={shopInventory}
        handleAddItem={handleAddItem}
      />
      <InventoryList
        title="User Inventory"
        inventory={userInventory}
        handleRemoveItem={handleRemoveItem}
      />
    </section>
  </main>
);
```

Update the **Remove Item** button with the following `onClick` event handler. Remember to pass in the `item` object. 

```jsx
// src/components/InventoryList/InventoryList.jsx

<button onClick={() => props.handleRemoveItem(item)}>
  Remove Item
</button>
```

Check the browser. You should be able to add an remove items from your cart. 

### Wrapping up
Our app's functionality is now in place, but we don't want to leave any un-styled buttons in our app. Let's conclude this lesson with some essential CSS. 

Run the following command in the terminal. 

```
touch src/components/InventoryList/InventoryList.css
```

Add the following to `InventoryList.css`:

```css
/* src/components/InventoryList/InventoryList.css */

.inventory-list > ul {
  padding: 0;
}

.inventory-list li {
  width: 450px;
  display: flex;
  margin-top: 5px;
  list-style: none;
  border-radius: 5px;
  align-items: center;
  padding: 0 16px;
  border: 1px solid rgb(140, 140, 140);
  box-sizing: border-box;
}

.inventory-list li > :first-child {
  flex-grow: 100;
  text-align: left;
}

.inventory-list li > :nth-child(2) {
  padding-right: 32px;
}
```

Finally, add an import to the top of `InventoryList.jsx`, and give the container `div` a class of `"inventory-list"`:

```jsx
// src/components/InventoryList/InventoryList.jsx

import './InventoryList.css';

const InventoryList = (props) => {
  return (
    <div className="inventory-list">
      <h2>{props.title}</h2>
      <ul>
        {props.inventory.map((item) => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>

            {props.handleAddItem ? (
              <button onClick={() => props.handleAddItem(item)}>
                Add Item
              </button>
            ) : (
              <button onClick={() => props.handleRemoveItem(item)}>
                Remove Item
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
```