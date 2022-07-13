import React from "react";
import ItemDetail from "./ItemDetail";

const product = 
    {  
        "id":1, 
        "nombre":"Flynn Paff", 
        "precio":10, 
        "img":"https://dulcilandia.com.ar/par/wp-content/uploads/sites/4/2020/04/00601043-510x510.png",
        "descripcion":"Caramelos Flynn Paff son caramelos masticables gigantes con sabor a chicle globo"
    }



const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("then");
        reject(console.log("Hubo un problema"));
    }, 2000);
});



function ItemDetailContainer() {
    getItem
    .then(console.log(product))
    .catch(err => {console.log(err)})

}

export default ItemDetailContainer

