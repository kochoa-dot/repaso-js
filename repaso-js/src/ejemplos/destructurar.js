export default function DestructurarEjemplo(){
     let persona = {
        nombre: 'Kevin',
        apellido: 'Hernández',
        edad: 999,
        fechaActual: new Date()
    }; 
    //Ejemplo 1: destructurando las propiedades de un objeto

    // const nombre = persona.nombre;
    // const apellido = persona.apellido;
    // const edad = persona.edad;

    // Pero hay una manera mas abreviada de hacer esto que es usando destructurar que es crear variables a partir de las propiedades que yo desee del objeto persona

    // esto quiere decir que yo quiero crear las propiedades dentro de la llave a partir del objeto persona 
    const { nombre, apellido, edad } = persona;

    //console.log(nombre, edad, apellido);

    //Ejemplo 2: destructurando el valor de retorno de una función

    //En este ejemplo la función retorna un objeto con sus 3 propiedades
    const obtenerDireccion = () => {
        return {
            calle: 'Mi calle',
            pais: 'Mi país',
            provincia: 'Mi provincia'
        }
    }

    const {pais, provincia} = obtenerDireccion();

    console.log(pais, provincia);

    //Ejemplo 3: destructurar el parámetro de una función

    const imprimirNombre = (persona) => {
        console.log(persona.nombre);

        const nombreEnMayusculas = persona.nombre.toUpperCase();
        console.log(nombreEnMayusculas);
    }

    //El resultado es igual solo que accedemos al valor del parametro para no tener que referenciar al objeto como tal 

    const imprimirNombre2 = ({nombre}) => {
        console.log(nombre);

        const nombreEnMayusculas = nombre.toUpperCase();
        console.log(nombreEnMayusculas);
    }

    imprimirNombre(persona);
    imprimirNombre2(persona);

    //Ejemplo 4: Del mismo modo podemos destructurar un arreglo

    const numeros = [1, 2, 3, 4];

    const [primero, segundo, , cuarto] = numeros;
    console.log(primero, segundo, cuarto);

    //Algo comun es que si tienes una función la cual retorna un arreglo tu destructures los valores del arreglo en variables
    const retornaArreglo = () => {
        return ['Kevin', 'Hernández'];
    }

    const [nombres, apellidos] = retornaArreglo();

    console.log(nombres, apellidos);
}