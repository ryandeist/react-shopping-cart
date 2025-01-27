import { inventoryData } from "../../data/data";
import InventoryList from "../InventoryList/InventoryList";

const Shop = () => {
    // console.log(inventoryData);
    return (
        <main>
            <h1>Shop</h1>
            <InventoryList inventory = {inventoryData} />
        </main>
    );
};

export default Shop;