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

export default InventoryList