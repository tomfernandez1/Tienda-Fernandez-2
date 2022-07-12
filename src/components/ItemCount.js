import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const incrementar = () => {
        if (count<=4 && stock>0){
        setCount(count + 1);
        }
    }
    const decrementar = () => {
        setCount((valAnt) => valAnt > 1 ? count - 1 : count);
    };
    

  return (
    <div>
        <h3>{count}</h3>
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
        <button
            onClick={() => {
                if (count <= stock && stock>0) {
                    onAdd(count);
                } 
            }}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;