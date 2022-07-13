import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "../products.json"

const ItemListContainer = ({greeting}) => {
    function onAddCallback(n){
        alert(`Agregados ${n} productos`);
    }
    return <div>
          {greeting}
        <div>
            <div style={{width: "18rem"}}>
                <ItemCount 
                    stock={5} 
                    initial={1} 
                    onAdd={onAddCallback} className="card" style={{width: "18rem"}} />
                
            </div>
        </div>
    </div>;
};

export default ItemListContainer;