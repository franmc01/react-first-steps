import React, { Fragment, useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto'
import Carrito from './components/Carrito'

const App = () => {

     //Crear un listado de productos
     const [productos, agregarProductos] = useState([
          { id: 1, name: 'Licuadora', price: 200 },
          { id: 2, name: 'Batidora', price: 300 },
          { id: 3, name: 'Lavadora', price: 400 },
          { id: 4, name: 'Aspiradora', price: 250 },
          { id: 5, name: 'Cocina', price: 100 },
     ]);


     //useState para un carrito de compra
     const [ carrito, agregarCarrito ] = useState([]);

     //Obtener el año actual
     const anio = new Date().getFullYear();

     return (
          <Fragment>
               <Header title="Tienda de Sisco" />

               <h5>Listado de productos</h5>

               { 
                   productos.map((producto) => { 
                        return <Producto 
                                   key={producto.id} 
                                   productos={productos} 
                                   producto={producto} 
                                   carrito={carrito} 
                                   agregarCarrito={agregarCarrito} 
                              /> 
                   })
               }
               <Carrito carrito={carrito} 
                        agregarCarrito={agregarCarrito} />

               <Footer anioActual={anio} />
          </Fragment>
     )
}

export default App;