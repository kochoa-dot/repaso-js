export default function VariablesEjemplo(){
    //Con let yo defino una varible al cual yo le coloco un nombre 
    let apellido = "Hernández";
    apellido = "Ochoa";
    let edad = 999;
    let fecha = new Date();

    // las variables pueden tener propiedades y ser de distintos tipos
    let persona = {
        nombre: 'Kevin',
        apellido: 'Hernández',
        edad: 999,
        fechaActual: new Date(),
        estaLogueado: true
    };

    let miFuncion = function duplicar(valor){
        return valor * 2;
    }

    //aunque parezca lo mismo no es recomendable utilizar var 
    var pais = "República Dominicana";

    pais = "México";

    //Var parece no respetar el contexto y permite ser global por lo que puede causar errores
    for(var i = 1; i<=10; i++){
        //...
    }

    console.log(i);

    //además de variables yo puedo definir constantes
    // las constantes no pueden ser sobreescritas o cambiar su valor por lo que este ejemplo generaría un error
    const continente = 'América';
    // continente = 'Europa';

    //en este caso si se permite ya que no se está reasignando el valor de la constante si no que se le está modificando el valor interno del que representa la variable que en este caso es un arreglo
    const ingredientes = ['Queso', 'Jamón'];
    ingredientes.push('Vegetales');
}