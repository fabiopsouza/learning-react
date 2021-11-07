# Conceitos

- **NVM:** Gerenciador de versões do node (Usado para instalar e gerenciar diferentes versões do node)
- **NPM:** Gerenciador de pacotes do node (Usado para instalar e gerenciar pacotes do node, incluíndo o React)
- **NPX:** Executador de pacotes do NPM. Executa um pacote sem baixar

- **JSX:** Extensão da sintaxe do JavaScript usado pelo react para definir como um elemento da interface deve aparecer na tela

- **React (primeira letra maíuscula):** Ecossistema do React
- **react (minusculo):** Biblioteca específica do facebook
- **React Native:** Próprio para construit aplicativos de celular

- React trabalha com funções. Os elementos dentro da função, como h1, div, li, apesar de parecer elementos HTML, na verdade são elementos JSX que em tempo de execução são transpilados para HTML

- Cada componente (função) deve retornar apenas um elemento HTML (JMX). Se tiver mais de um elemento, eles devem estar dentro de uma outra tag para uni-los.

- **props:** propriedade passada no construtor de todos os componentes que recebe as propriedades declaradas na sua inicialização

- **setState:** método setter disponibilizado pelo react para que o desenvolvedor modifique o estado de uma propriedade interna de um componente. Internamente o react atualiza os outros componentes que usam esse estate chamando o método render de cada um

- Apesar de existir essa funcionalidade state, deve-se tomar cuidado por que, sempre que um render é chamado, acaba renderizando os filhos então esse set pode acabar causando uma renderização de partes muito grandes da tela, ou até mesmo a tela toda.
- Uma alternativa é utilizar o padrão Observable, como por exemplo na classe src/dados/Categorias.js. Nele, você gerencia os eventos de mudança e atualiza o setState manualmente apenas dos componentes necessários

- Método render é gerenciado apenas pelo React e o desenvolvedor não consegue chama-lo

- Propriedades passadas para os componentes são imutáveis, portanto não podem ser alteradas.

- **bind(instanciaQueDeveCorresponderQuandoChamarOThis):** Atenção com o bind. É comum ter problemas relacionados a isso por que o react não passa a referencia da instancia por parâmetro e sim uma cópia.

- **bind:** recebe uma função como parâmetro e retorna uma nova função