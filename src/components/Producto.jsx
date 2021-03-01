import React from 'react'

const Producto = ({ producto, carrito, agregarCarrito, productos }) => {

    const addCheckout = (id) => {
        const productoSelected = productos.filter(producto => producto.id === id);
        agregarCarrito([...carrito, ...productoSelected]);

    }


    return (
        <div className="producto">
            <p>{producto.name} - {producto.price}</p>
            <button type="button" onClick={() => addCheckout(producto.id)} >Añadir al carrito</button>
        </div>
    );
}

export default Producto;