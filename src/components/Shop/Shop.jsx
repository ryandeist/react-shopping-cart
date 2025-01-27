import { inventoryData } from "../../data/data";
import { useState } from "react";   
import InventoryList from "../InventoryList/InventoryList";

const Shop = () => {
    const [inventory, setInventory] = useState(inventoryData);
    // console.log(inventoryData);

    const handleAddItem = () => {
        const newItemOne = { _id: 62345, name: 'Banana', price: .27 };
        const newItemTwo = { _id: 22345, name: 'Avocado', price: 2 }
        setInventory([newItemOne, newItemTwo]);
    };

    return (
        <main>
            <h1>Shop</h1>
            <button onClick={handleAddItem}>Click Here</button>
            <InventoryList inventory = {inventory} />
        </main>
    );
};

export default Shop;