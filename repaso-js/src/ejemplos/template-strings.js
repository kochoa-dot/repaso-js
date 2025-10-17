export default function TemplateStringsEjemplo(){
    const nombre = 'Kevin Hernández'; // Comillas simples

    const pais = "SV"; // Comillas dobles

    const saludo = "Hola, " + nombre + ", Como estas?";

    //template strings o plantillas de string 

    const saludo2 = `Hola, ${nombre}, Cómo estas?`; // Usando tíldes (backticks) nos permiten dividir un strings en varias líneas

    const sumar = (a, b) => a + b;

    const mensaje = `Hola, ${nombre} 
    Esta es una carta

    La suma de 2 y 3 es ${sumar(2,3)}

    Att: Yo`;// es un string complejo de varias líneas y puedo incluir variables y funciones

    console.log(mensaje);
}