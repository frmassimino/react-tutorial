import './App.css';
import CustomHeader from './components/Header';
import P from './components/P'
import React, { Component } from 'react';

class App extends Component {
  state = {
    miau: 'Bienvenido a miau'
  }
  manejaClick = texto => {
    console.log(texto)
  }
  cambiarTextoDelEstado = () => {
    this.setState({ miau: 'Hola Franco!'})
  }
  render(){
    const { miau } = this.state
    const texto = 'Bienvenido miau!'
    return (
      <div className="App">
        <CustomHeader miau={miau} manejaClick={this.manejaClick}/>
        <P onClick={this.cambiarTextoDelEstado}>
          {miau}
        </P>
      </div>
    );  
  }
}

export default App;

/**Puedo usar <CustomHeader miau={'Bienvenido miau!'}/> las veces que quiera en el codigo*/
/**Los componentes pueden tener estado interno, es decir variables unicas del componente */
/**Los props se pasan de padre a hijo, mientras que state es de uso interno de la clase y pueden ser pasados a los hijos */