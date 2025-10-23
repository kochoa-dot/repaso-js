//Map nos permite proyectar contenido de un arreglo para transformarlo en otro 

export default function MapEjemplo(){
    //Ejemplo 1: transformando números
    const numeros = [1,2,3,4,5];
    //Imaginemos que queremos convertir al cuadrado cada uno de esos números del arreglo y colocar el resultado en otro arreglo
    //Map nos permite tomar cada valor de manera individual del arreglo hacerles una transformación y colocar cada transformación como elementos de un nuevo arreglo
    const cuadrados = numeros.map(valor => valor * valor); //[1, 4, 9, 16, 25]
    console.log(cuadrados);
    // acá map nos permitió recorrer los valores del arreglo numeros y hacer una modificación sobre cada valor del arreglo y crear un nuevo arreglo con eso 

    //Ejemplo 2: extrayendo un valor de un arreglo de objetos
    //Arreglo de elementos que son personas
    const personas = [
        {id: 1, nombre: 'Kevin', pais: 'SV'},
        {id: 2, nombre: 'Adriana', pais: 'SV'},
        {id: 3, nombre: 'Roberto', pais: 'CH'},
    ];

    console.log(personas);
    //Pero yo puedo querer un arreglo con solo un valor por ejemplo id 

    //Con esto le decimos a map que recorra cada persona del arreglo y extrae su id y coloca cada valor en el arreglo
    const ids = personas.map(personas => personas.id);
    console.log(ids);

    const nombre = personas.map(personas => personas.nombre);
    console.log(nombre);
    // Yo tambien puedo hacer una proyeccion a un objeto nuevo

    const nombreYPaises = personas.map(personas => {
        //retorno un objeto
        return {
            nombre: personas.nombre,
            pais: personas.pais
        }
    });

    console.log(nombreYPaises);

    //Ejemplo 3: Generando UI

    const elementosDeLista = numeros.map(valor => 
        `<li>${valor}</li>`
    );

    //Para poder tener los valores de forma secuencial usamos el join sin nada que los separe - es decir yo puedo tomar cada valor del arreglo y concatenarlo
    const lista = `
        <ul>
            ${elementosDeLista.join("")}
        </ul>
    `;

    console.log(lista);
    return lista;
}