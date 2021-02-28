import React, { Fragment } from 'react'
import Footer from './components/Footer';
import PrimeraApp from './components/PrimeraApp';


const App = () => {

     const anio = new Date().getFullYear();

     return (
          <Fragment>
               <PrimeraApp title="Guaguita xD" />

               <Footer anioActual={anio} />
          </Fragment>
     )
}

export default App;