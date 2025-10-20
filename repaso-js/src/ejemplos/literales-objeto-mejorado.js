export default function LiteralesDeObjetosMejorado(){

    let apellido = 'Hernández';

    const paisProp = 'pais';
    const paisValor = 'SV';

    let persona = {
        nombre: 'Kevin',
       // apellido: apellido esto es igual a solo colocar apellido ya que anteriormente ya tenemos esa variable declarada
        apellido,
        funcionNormal(){},
        funcionFlecha: () => {},
        [paisProp]: paisValor // Aca yo digo que Pais será el nombre de la propiedad que es una variable y su valor será SV que es otra constante que definimos al comienzo
        //Se puede hacer siempre que yo coloque corchetes
    };

    //Yo puedo acceder a los valores que tiene el objeto de persona al acceder al objeto y luego . para ver sus propiedades

    console.log(persona.apellido);

    //Tambien podemos definir una función anónima la cual recibe un parametro llamado prop y retornamos la propiedad prop de persona, en este caso pasamos como parametro prop para poder pasar cualquier propiedad del objeto persona y retornarlo en la función anónima

    const retornarValorPropiedadPersona = (prop) => persona[prop];
    // Es decir que usando corchetes yo puedo acceder dinamicamente a una propiedad de un objeto
    console.log(retornarValorPropiedadPersona('apellido'));

    console.log(persona);
}