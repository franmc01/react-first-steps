import React from 'react'
import Producto from './Producto';
import './carrito.css';

const Carrito = ({ carrito, agregarCarrito }) => {
    return (
        <div className="carrito">
            <h2>Tu carrito de compras</h2>
            {carrito.length === 0
            
            ? <p>Carrito vacio</p>
            
            :carrito.map(producto => (
                <Producto key={producto.id} 
                          producto={producto} 
                          carrito={carrito} 
                          agregarCarrito={agregarCarrito} />
            ))
            
            }
        </div>
    );
}

export default Carrito;