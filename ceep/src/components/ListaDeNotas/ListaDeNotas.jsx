import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {

  //JavaScript recebe props automaticamente no construtor e passa para o super().
  //Por isso, como não vamos fazer nada além disso nesse construtor, não é necessário cria-lo. 

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
