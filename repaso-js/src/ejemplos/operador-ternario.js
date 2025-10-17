export default function OperadorTernarioEjemplo(){
    const edad = 21;

    // let mensaje;

    // if (edad >= 18) {
    //     mensaje = "Eres mayor de edad";
    // } else {
    //     mensaje = "Eres menor de edad";
    // }
    //Todo este código se puede abreviar en una sola línea utilizando el operador ternario
    // Tenemos una expresión booleana que puede devolver verdadero o falso
    // EXPRESION BOOLEANA ? (OPERADOR TERNARIO (?)) SENTENCIA - TRUE : SENTENCIA - FALSE
    const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    console.log(mensaje);
}