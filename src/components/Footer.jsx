import React from 'react'
import PropTypes from 'prop-types'



const Footer = ({anioActual}) => ( 
    <footer><p>Todos los derechos reservados &copy; Francisco Marin { anioActual }</p></footer> 
);
 
//Definicion de los propTypes, lo cuales sirven para indicar a otros desarrolladores que y cuales son las propiedades que recibira mi componente y son opcionales o requeridas para que funcione
Footer.protoType = {
    anioActual: PropTypes.number.isRequired
}

Footer.defaultProps = {
    anioActual: 2022
}

export default Footer;