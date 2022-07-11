import React from 'react';
import Item from './Item';
import { useState, useEffect } from 'react';

const ItemList = ({items}) => {

    const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            console.log("useEffect");
        })

  return (

    <div>
        {loading ? (
            <h3>Cargando...</h3>
        ) : (
            items.map ((el) =>
            <Item 
                nombre={el.nombre}
                precio={el.precio}
                imagen={el.imagen}
                key={el.id}
            />)   
        )
        }</div>
  );
};

export default ItemList;


