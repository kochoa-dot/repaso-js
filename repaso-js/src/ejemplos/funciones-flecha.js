//Función tradicional que consta de palabra reservada function, nombre de la función los parametros de entrada luego un cuerpo y en este caso el valor de salida
function duplicar(valor){
    return valor * 2;
}

// Yo puedo declarar una función anónima o en este caso función flecha que es una función sin nombre 
//Acá yo declaro una función anónima y la asigno a una variable se le llama flecha por esto => que separa los parámetros de entrada en este caso valor del cuerpo de la función 
let funcionAnonima = (valor) => {
    return valor * 2;
}

//Si el cuerpo es de una sola línea yo puedo prescindir de las llaves ni tampoco el return

let funcionAnonima2 = valor => valor * 2;

funcionAnonima2(3);

let sumar = (sumando1, sumando2) => sumando1 + sumando2;

sumar(1, 2);

let imprimirAlgo = () => console.log('prueba');

imprimirAlgo();

//una de los motivos de las funciones anónimas es resumir código

function FuncionQueRecibeComoParametroUnaFuncion(funcion){
    funcion();
}

FuncionQueRecibeComoParametroUnaFuncion(imprimirAlgo);

//En este caso omitimos el crear la función tradicional o crear una variable que represente una función y le estoy pasando lo que recibe esta función pero de forma de flecha
FuncionQueRecibeComoParametroUnaFuncion(() => console.log('lo que yo quiera'));

//El this te permite acceder al contexto en el cual se ejecuta el código actual sin embargo existe una diferencia entre el valor del this en una función normal y una función flecha la diferencia es que en una función normal el valor del this es el valor del objeto que hizo la invocación de la función es decir el this varía según como ejecutamos la función mientras que en la función flecha el this no depende de quien llamó la función sino del lugar en donde la función fue definida es decir el ambiente original

export function Ejemplothis(){
    const persona = {
        nombre: 'Kevin',
        edad: 999,

        saludarNormal: function(){ //función ordinaria
            setTimeout(function(){
                //este this hace referencia al objeto donde se creo por ello el this es hacía persona y luego el nombre
                console.log('Hola, soy ' + this.nombre);
            }, 1000)
        },

        saludarFlecha: function(){
            setTimeout(() => {
                console.log('Hola, soy ' + this.nombre) 
            }, 1000)
        }
    };
    
    persona.saludarNormal();// Hola, soy undefined
    persona.saludarFlecha();// Hola, soy Kevin

    // En este caso como la primera hace referencia al lugar donde se ejecuta la función en este caso desde main en este caso se manda a ejecutar desde el navegador donde no tengo la función definida busca este nombre en el objeto window en la función flecha el this representa el objeto donde fue declarada la función y como esa función fue declarada acá dentro de este contexto persona pues this hace referencia a la persona

    //Al hacer la variable nombre dentro del window estamos haciendo referencia al lugar donde se ejecuta la función por lo que ese this puede retornar el nombre que es del contexto donde se ejecuta la función
}