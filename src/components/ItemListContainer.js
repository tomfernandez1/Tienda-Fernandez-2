import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return <div>
          {greeting}
        <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
            <ItemCount 
                stock={5} 
                initial={1} 
                onAdd={(n) => alert(`agregados ${n} productos`)} />
            </div>
        </div>
    </div>;
};

export default ItemListContainer;