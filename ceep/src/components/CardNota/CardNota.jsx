import React, { Component } from "react";
import "./estilo.css";

// Cria um componente inline de imagem para ser usado
import {ReactComponent as DeleteSvg} from "../../assets/img/delete.svg" 

class CardNota extends Component {

  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSvg onClick={this.apagar.bind(this)} />
          <p className="card-nota_texto">{this.props.categoria}</p>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
