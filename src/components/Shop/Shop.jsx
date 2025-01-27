import { inventoryData } from "../../data/data";
import { useState } from "react";
import InventoryList from "../InventoryList/InventoryList";
import './Shop.css';

const Shop = () => {
    //const [inventory, setInventory] = useState(inventoryData);
    // console.log(inventoryData);
    const [shopInventory, setShopInventory] = useState(inventoryData);
    const [userInventory, setUserInventory] = useState([]);

    const handleAddItem = (item) => {
        setUserInventory([...userInventory, item]);
        setShopInventory(shopInventory.filter((el) => el._id !== item._id));
    };

    const handleRemoveItem = (item) => {
        setShopInventory([...shopInventory, item]);
        setUserInventory(userInventory.filter((el) => el._id !== item._id));
    };

    return (
        <main>
            <h1>Shop</h1>
            {/* <button onClick={handleAddItem}>Click Here</button> */}
            <section className="shop-section">
                <InventoryList title="Shop Inventory" inventory={shopInventory} handleAddItem={handleAddItem} />
                <InventoryList title="User Inventory" inventory={userInventory} handleRemoveItem={handleRemoveItem} />
            </section>
        </main>
    );
};

export default Shop;