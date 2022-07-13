import React from "react";

const product = 
    {  
        "id":1, 
        "nombre":"Flynn Paff", 
        "precio":10, 
        "img":"https://dulcilandia.com.ar/par/wp-content/uploads/sites/4/2020/04/00601043-510x510.png",
        "descripcion":"Caramelos Flynn Paff son caramelos masticables gigantes con sabor a chicle globo"
    }

function ItemDetail (){
    return <div>
        {
        <div className='card' style={{width:"18rem", alignItems:"center", margin:"10px"}}>
            <div style={{width:"10rem",margin:"10px"}}>
                <h3>{product.nombre}</h3>
                <img src={product.img} alt="Imagen de producto Flynn Paff" style={{width:"10rem"}}></img>
                <h4>Precio: ${product.precio}</h4>
                <h5>ID: {product.id}</h5>
                <h6>Descripción: {product.descripcion}</h6>
            </div>
        </div>
        }
    </div>
}


export default ItemDetail