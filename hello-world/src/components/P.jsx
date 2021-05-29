import React, { Component } from 'react'

export default class P extends Component {
    render(){
        const { children } = this.props /**Todos los componenetes tienen una propiedad que se llama, children es todo aquello que se coloca dentro de la etiqueta p*/
        return (
            // <p className='App-intro'>
            // {children}
            // </p>
            /**Una alternativa por si quiero pasar todas las propiedades no solo el contenido de la etiqueta es: */
            <p {...this.props} className='App-intro'/>
        )
    }
}

