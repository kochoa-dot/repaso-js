//Tipos que nosotros mismos podemos crear

export class Rectangulo{
    //Funcion que se ejecuta al momento de instanciar una clase
    constructor(alto, ancho){
        this.alto = alto; // este tendrá la propiedad que trae como parámetro
        this.ancho = ancho;
    }

    //No solo propiedades tambien podemos definir funcionalidades

    area(){
        console.log(`El área del rectángulo es ${this.alto * this.ancho}`)
    }
}



export class Cuadrado extends Rectangulo{
    constructor(alto){
        //Para hacer referencia a la clase base que en este caso es rectángulo porque Cuadrado Hereda de Rectangulo
        super(alto, alto);
        this.alto = alto;
    }

    area(){
        console.log(`El área del cuadrado es ${this.alto * this.alto}`);
    }
}