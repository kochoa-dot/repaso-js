import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import funcionPrincipal, { functionExportada as aliasDeLaFuncion, configuracionesGlobales } from './ejemplos/modulo.js'
import VariablesEjemplo from './ejemplos/variables.js'
import { Ejemplothis } from './ejemplos/funciones-flecha.js'
import TemplateStringsEjemplo from './ejemplos/template-strings.js'
import OperadorTernarioEjemplo from './ejemplos/operador-ternario.js'
import LiteralesDeObjetosMejorado from './ejemplos/literales-objeto-mejorado.js'
import DestructurarEjemplo from './ejemplos/destructurar.js'
import OperadorSpread from './ejemplos/spread.js'
import { Cuadrado, Rectangulo } from './ejemplos/clase.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// aliasDeLaFuncion();
 
// console.log(configuracionesGlobales.idioma);

// funcionPrincipal();

//VariablesEjemplo();
window.nombre = 'Claudia';
// Ejemplothis();

// TemplateStringsEjemplo();

// OperadorTernarioEjemplo();

// LiteralesDeObjetosMejorado();

// DestructurarEjemplo();

OperadorSpread();

//Instanciar crear una variable a partir del tipo 

const rectangulo1 = new Rectangulo(2,3);
console.log(rectangulo1.alto);
//Hacemos todo esto a partir de la clase que instanciamos
//Nos permite tener una estructura que repetimos tantas veces como querramos
rectangulo1.area();
//Nos permite definir data y funcionalidad en un solo lugar y puedo reutilizar data y comportamiento gracias a la instanciación
const rectangulo2 = new Rectangulo(4,5);
rectangulo2.area();
//También nos permite heredar que nos permite tomar estructura de una clase y aplicarsela a otra y extenderla

//Podemos utilizar clases para definir unidades las cuales van a tener datos y comportamiento y luego podemos utilizar esas unidades en cualquier parte de la aplicación a través de la instanciación
const cuadrado1 = new Cuadrado(5);
cuadrado1.area();