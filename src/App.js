import React,{Component} from 'react';
import './App.css';

const axios = require("axios");

class App extends React.Component {

  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
    this.handlerText = this.handlerText.bind(this);
    this.state = {consulteApi:false} ;
  }

  handlerClick(){
    console.log("handleado");

    var nombre = this.state.nombre;

    axios.get('https://rickandmortyapi.com/api/character/?name=' + nombre )
      .then( response =>{
        console.log(response);
        this.setState({consulteApi:true, results: response.data.results});
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  handlerText(event){

    this.setState({nombre: event.target.value});
  }

  render (){

    var resultados;
      if(this.state.consulteApi && this.state.results != 0){

        resultados = (
          <div> 
            <img src={this.state.results[0].image} alt={this.state.results.name}></img>
            <h2>{this.state.results.name}</h2>
            <p><strong>Nombre: </strong>{this.state.results[0].name}</p>
            <p><strong>Especie: </strong>{this.state.results[0].species}</p>
            <p><strong>Estado: </strong>{this.state.results[0].status}</p>
            <p><strong>Genero: </strong> {this.state.results[0].gender}</p>
         
          </div>
        );
      }else{
        resultados = <div></div>
      }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rick and Morty</h1>
          <p>Personaje: </p>
          <input className="boton" type="text" onChange={this.handlerText} ></input>
          <button className="boton" onClick={this.handlerClick}>Buscar</button>
         
          {resultados}
          
        </header>
      </div>
    );

  } 

}


export default App;