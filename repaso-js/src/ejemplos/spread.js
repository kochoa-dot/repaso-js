export default function OperadorSpread(){
    //Ejemplo 1: Operador Spread con una función
    //El operador Spread básicamente nos permite tomar un arreglo o un objeto y expandirlo para que pueda satisfacer los parametros de una función o incluso las propiedades de un objeto
    const sumar = (a, b) => a + b;

    const numero = [2,3];

    // Sin operador spread

    // const resultado = sumar(numero[0], numero[1]);  

    //Con el operador spread romperíamos el arreglo para satisfacer la necesidad de los parametros que le estamos pasando a la función
    //El operador Spread se llama con ... y luego el arreglo al cual queremos aplicar dicho operador
    const resultado = sumar(...numero);

    // console.log(resultado);//5

    // Ejemplo 2: concatenando arreglos
    //En este caso yo quiero agregar uno al arreglo existente por lo que creo un arreglo y luego uso el operador Spread para agregar el valor quedando de esta forma [1,2,3] rompiendo la estructura y quedandome con sus elementos
    const masNumeros = [1, ...numero];
    //No es lo mismo usarlo que no usarlo 
    const masNumerosV2 = [1, numero];

    // console.log(masNumeros);// En este caso el resultado es un arreglo de tres elementos [1,2,3]
    // console.log(masNumerosV2);// En este caso el resultado es un arreglo de dos elementos [1, array(2)] es un arreglo que internamente tiene otro arreglo

    // Ejemplo 3: Concatenando varios arreglos

    const otrosNumeros = [4, 5];
    const muchosNumeros = [...numero, ...otrosNumeros] // [1,2,4,5]

    // Ejemplo 4: Destructurando y usando el operador spread sobre un arreglo

    const [primero, ...resto] = muchosNumeros;

    // console.log(muchosNumeros);
    // console.log(primero);
    // console.log(resto);

    // Ejemplo 5: Clonando un arreglo
    // En este caso al modificar el arreglo 2 estamos haciendo referencia también al arreglo 1 por lo que ambos se les añadirá el valor 6 de la modificación
    // const muchosNumeros2 = muchosNumeros;

    // muchosNumeros2.push(6);


    // console.log(muchosNumeros);
    // console.log(muchosNumeros2);

    //En este ejemplo como clonamos un arreglo con el operador spread solo se modifica la nueva ubicación de los datos no afecta al arreglo original
    const muchosNumerosCLonado = [...muchosNumeros];
    muchosNumerosCLonado.push(6);

    // console.log(muchosNumeros);
    // console.log(muchosNumerosCLonado);

    // Ejemplo 6: Operador spread sobre un objeto

    //En este caso vamos a tratar de anexarle las propiedades del primer objeto al segundo
    const persona = {
        nombre: 'Kevin',
        apellido: 'Hernández'
    };
    // Para agregarlo de manera individual al segundo objeto
    // En este caso las propiedades del objeto uno pasan a ser propiedades directas del objeto 2 
    const persona2 = {
        ...persona,
        edad: 999,
        direccion: {
            pais: 'SV',
            provincia: 'San Salvador'
        }
    }

    // console.log(persona2);

    // Ejemplo 7: clonando un objeto

    // Si se modifica el objeto se modifica aquello donde apunta cada variable que apunta a dicho objeto

    //En este caso se puede modificar una propiedad sin afectar al objeto original
    const persona3 = {...persona2};

    persona3.nombre = "Adriana";

    // Ejemplo 8: Destructurar y operador spread sobre un objeto
    // En este caso destructuramos el objeto retornando unicamente las propiedades individuales y lo que sobra lo dejamos en la propiedad de persona4 gracias al spread sabemos cuales son los campos que sobran
    const {edad, direccion, ...persona4} = persona2;

    console.log(edad);
    console.log(direccion);
    console.log(persona4);
}