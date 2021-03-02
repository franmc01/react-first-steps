import React from 'react'

const Producto = ({ producto, carrito, agregarCarrito, productos }) => {

    //Agrega al carrito
    const addCheckout = (id) => {
        const productoSelected = productos.filter(producto => producto.id === id);
        agregarCarrito([...carrito, ...productoSelected]);

    }

    //Elimina del carrito
    const removeCarrito = (id) => {
        const productos = carrito.filter(producto => producto.id !== id);
        agregarCarrito(productos);
    }




    return (
        <div className="producto">
            <p>{producto.name} - {producto.price}</p>
            { productos 
                ? <button type="button" onClick={() => addCheckout(producto.id)} >Comprar</button>
                :<button type="button" onClick={() => removeCarrito(producto.id)}>Eliminar</button>
            }
        </div>
    );
}

export default Producto;