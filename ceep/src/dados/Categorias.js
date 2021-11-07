export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    //gera novo array com todos os elementos, exceto a função que está no parâmetro da função filter (filtro)
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    //itera sobre todos os inscritos e executa a função de callback passada na inscrição
    this._inscritos.forEach((func) => {
      func(this.categorias);
    });
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar(this.categorias);
  }
}
