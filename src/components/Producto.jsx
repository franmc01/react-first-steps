import React from 'react'

const Producto = ({ producto }) => {

    const addCheckout = (id) => {
        console.log('Comprando', id)
    }


    return (
        <div className="producto">
            <hr />
            <p>{producto.name} - {producto.price}</p>
            <button type="button" onClick={ () => addCheckout(producto.id)} >Añadir al carrito</button>
            <hr />
        </div>
    );
}

export default Producto;