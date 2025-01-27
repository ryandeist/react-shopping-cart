import { inventoryData } from "../../data/data";
import { useState } from "react";
import InventoryList from "../InventoryList/InventoryList";
import './Shop.css';

const Shop = () => {
    //const [inventory, setInventory] = useState(inventoryData);
    // console.log(inventoryData);
    const [shopInventory, setShopInventory] = useState(inventoryData);
    const [userInventory, setUserInventory] = useState([]);

    const handleAddItem = () => {

    };

    return (
        <main>
            <h1>Shop</h1>
            {/* <button onClick={handleAddItem}>Click Here</button> */}
            <section className="shop-section">
                <InventoryList title="Shop Inventory" inventory={shopInventory} />
                <InventoryList title="User Inventory" inventory={userInventory} />
            </section>
        </main>
    );
};

export default Shop;