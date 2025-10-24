//Hasta el momento habiamos trabajado de manera sincrona ya que el código se ejecutaba de manera secuencial
//El proposito de la programación asíncrona es que la aplicación no se freeze en el transcurso de una operación 

//La forma de lograrlo es con promesas o async await
//Las promesas son garantías de que esta operación en el futuro va a dar un resultado
export function Promesa(){
    //En este caso yo voy a disparar una función no tengo que esperar a que de un resultado pero esta me promete que eventualmente habrá un resultado
    //Si es exitosa el then espera a que se ejecute el fetch le pasamos como parametro la función que queremos que se ejecute cuando tenga una respuesta de la petición http
    //El catch nos sirve en caso de que la petición resulte en un error
    fetch('https://jsonplaceholder2.typicode.com/todos/1')
    .then(respuesta => respuesta.json())
    .catch(error => console.error(error))
    .then(json => console.log(json));
}

//Async await
//Colocamos await para indicar que nuestra aplicación puede esperar de manera asincrona que quiere decir que en lo que se ejecuta el fetch mi aplicación puede seguir funcionando
//Para poder usarlo tenemos que marcar nuestra función con Async
export async function AsyncAwait(){
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        //Esta siguiente linea se ejecutará hasta que termine nuestra función asincrona sin que eso signifique congelar nuestra aplicacion
        const json = await respuesta.json();
        console.log(json);
    } catch(error){
        console.error('Hubo un error en AsyncAwait');
    }
}
//Para manejar sincronia en js tenemos las dos opciones promesas con then y catch y async y await