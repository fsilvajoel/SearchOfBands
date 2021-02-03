# Aplicação Search of Bands

## Descrição resumida

Foi desenvolvido uma aplicação frontend com o uso do framework React.js. A finalidade da mesma foi realizar a chamada à duas APIs diferentes a parir de uma caixa de busca. As APIS são:
[TicketMaster](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) e
[Youtube](https://developers.google.com/youtube/v3/getting-started).

## Objetivo

No [link](https://github.com/fsilvajoel/SearchOfBands/blob/main/Front%20End%20Test.pdf), é possível visualizar o PDF condendo o desafio proposto.

### Sobre o "desenrolar" do projeto

Houveram problemas relacionado ao consumo da API de eventos, a Ticketmaster, uma vez que as buscas realizadas não retornavam nenhum evento para o artista/ banda desejado. Desta forma, como o objetivo maior do desafio era provar as habilidades de frontEnd, trouxe uma ênfase em explorar recursos fortemente utilizados no mercado hoje em dia, e é claro, a estilização in natura dos componentes e layout.

Podem se destacar, dentre as ferramentas e tecnologias utilizadas, o uso de ganchos (hooks), e o gerenciador de estados APIContext. Vale lembrar que ambos são próprios do framework React, no entanto trazem o objetivo de criar funções onde o maior foco é a abstração da lógica em fragmentos que podem ser amplamente reaproveitados.

Além destas duas ferramentas, foi inserido também o uso da Styled-Components, uma bibliteca que tem como princípio, escrever código CSS dentro do Javascript. Dentre as grandes vantagens que ela trás, a possibilidade de trabalhar variáveis e lógica dentro do CSS é um grande facilitador. Outra vantagem que deve ser pontuada, é que a mesma traz uma abstração ao escrever propriedades css dos motores padrões dos navegadores (ex: Webkit, mos e ms).

Para tornar mais claro este ponto, segue uma explicação em código:

_código CSS escrito pelo desenvolvedor_

```css
 {
  flex-direction: column;
  align-items: center;
  height: 100px;
}
```

_o que o navegador recebe_

```css
 {
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100px;
}
```

## Ferramentas Utilizadas

- React.js
- ContextAPI - para gerenciamento e compartilhamento de estados globais
- Axios - para realização de requisições para API
- Prettier, eslint e editorconfig - para manter uma certa qualidade no código e seguir um padrão já utilizado no mercado, neste caso o padrão escolhido foi do airbnb.
- Styled Components - para estilização CSS
- React-Router-Dom - para gerenciamento de rotas
- React-Hook-Form - para trabalhar com formulários e campos de input
- Moment - para trabalhar com datas
- Material UI para ícones e modal

**Libs usadas para facilitar o consumo de dados do YouTube**

- youtube-api-search

### Como testar o frontend

1 - Instalar dependência do projeto

```shell
yarn
```

2 - Rodar aplicação

```shell
yarn start
```

3 - Acessar:

```
http://localhost:3000
```

Prints:

<img
  src="https://raw.githubusercontent.com/fsilvajoel/SearchOfBands/master/assets/Screen-mobile.png"
  width="300">

<img
  src="https://raw.githubusercontent.com/fsilvajoel/SearchOfBands/master/assets/Screen-desktop.png"
  width="800">
