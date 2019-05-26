import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      textoRep: '',
    }
  }
  render() {
    const { textoRep } = this.state
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" value={this.state.textoRep} onChange={this.showText.bind(this)} placeholder="Empieza a escribir algo" />
        <p className="repeater">{textoRep}</p>
      </div>
    );
  }

  showText(e){
    this.setState({
      textoRep: e.target.value
    })
  }

}

export default App;
