import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

ReactDOM.render(
  <App/>
  ,
  document.getElementById('root')
);

/* class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log('Roar.')
  }
}
const a = new Animal('Le�o');
console.log(a);
console.log(a.falar());
class Humano extends Animal {
  constructor(nome, idade, cabelo) {
    super(nome);
    this.idade = idade;
    this.cabelo = cabelo;
  }
  falar() {
    console.log("Oi!");
  }
  apresentar(){
    console.log("Meno nome �", this.nome, "eu tenho", this.idade, "anos de idade", ",e o meu cabelo �", this.cabelo,".");
  }
}
const h = new Humano("Marlon", "26", "Castanho")
console.log (h.falar());
console.log(h.apresentar());
 */