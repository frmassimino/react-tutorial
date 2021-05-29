import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import H1 from './H1'

/**
 * .App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
 */
/**En vez de pasar el estilo como una clase css, creoq una variable y la paso al compoenente. Reglas que
 *seguir: los guiones son reemplazados por camel case   ej: background-color -> backgroundColor, y los valores tiene que ser todos string 
*/
// const styles = {
//     header: {
//         backgroundColor: '#282c34',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         fontSize: 'calc(10px + 2vmin)',
//         color: 'white'
//     }
// }
/**Esta forma no soporta la palabra reservada 'important'  */
/**In-line styles dinamicos, son funciones que podemos aplciar a alos estilos para que cambien de forma dinamica. Para eso hay que transformarlo en una funcion*/
const styles = {
    header: ({ backgroundColor }) => ({ /**seteo el parametro extractory para poder pasarle background color */
        backgroundColor, /**Asigno el parametro al atributo */
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
        })
}

export default class CustomHeader extends Component {
    state = {
        backgroundColor: '#282c34'
    }

    manejaClick = () => {
        const { manejaClick, miau } = this.props
        manejaClick(miau)
    }

    cambiaColorHeader = () => {
        const {backgroundColor} = this.state
        this.setState({ backgroundColor : '#f00'})
    }

    render(){
        const{miau, manejaClick} = this.props //props es uan variable reservada que la tienen todas las clases que extienden de Component
        const{ backgroundColor } = this.state

        return(
            // <header className="App-header">
            <header onClick={this.cambiaColorHeader} style={styles.header({ backgroundColor })} >
            <h3>{miau}</h3>
            <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
            <H1>
                Vamo Boquita!
            </H1>
            </header>
        );
    }
}

/** Todas las etiquetas de html se manejan en jsx, a diferencia de que 'onclick' en html se escribe 'onClick' en jsx  */

