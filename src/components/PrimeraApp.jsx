import React from 'react';

//Functional Component
const PrimeraApp = ({ title }) => {

    const saludo = {
        "name": 'Francisco',
        "age": 25
    }

    return <>
        <h1>Hola</h1>
        <p> Francisco </p>
        <p>{title}</p>
        <h5>{JSON.stringify(saludo)}</h5>
    </>
}

export default PrimeraApp;