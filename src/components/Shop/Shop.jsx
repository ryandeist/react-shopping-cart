import { inventoryData } from "../../data/data";
import { useState } from "react";   
import InventoryList from "../InventoryList/InventoryList";

const Shop = () => {
    const [inventory, setInventory] = useState(inventoryData);
    // console.log(inventoryData);
    return (
        <main>
            <h1>Shop</h1>
            <InventoryList inventory = {inventory} />
        </main>
    );
};

export default Shop;