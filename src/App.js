import React, { Component } from 'react';

// import { Container } from './styles';

export default class src extends Component {
  state = {
    nome: "",
    poly: ""
  }

  handleChange = (e) => {
    this.setState({nome: e.target.value})
  }

  checkPoly = () => {
    const {nome} = this.state
    const arrNome = nome.split('')
    const invertido = []
    for (let i = arrNome.length; i >= 0 ; i--) {
      invertido.push(arrNome[i])      
    }

    const novoNome = invertido.join('')

    if(nome === novoNome) this.setState({ poly: "Igual"})
    else this.setState({ poly : ""})

    
  }

  render() {
    const {nome, poly} = this.state
    return (
      <div> 
        <input name="" value={nome} onChange={this.handleChange}/>
        <button type="button" onClick={this.checkPoly}>Check</button>

        <p>{poly}</p>
      </div>
    ) 
  }
}
