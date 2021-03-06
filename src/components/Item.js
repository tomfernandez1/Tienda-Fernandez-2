import React from 'react'

const Item = ({ nombre, precio, imagen }) => {
    const detalles = () => {
        alert("Precio: $"+precio)

    }
  return (
    <div className='card' style={{alignItems:"center", margin:"10px"}}>
        <h2>{nombre}</h2>
        <img src={imagen} alt={nombre} style={{width:"10rem"}} />
        <div style={{margin:"10px"}} onClick={detalles}>{"Ver detalles"}</div>
    </div>
  )
}

export default Item