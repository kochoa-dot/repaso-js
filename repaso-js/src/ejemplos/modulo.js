export function functionExportada(){
    console.log("Ejecutando la función exportada");
}

function funcionOculta(){
    console.log("Esta función no puede ser invocada desde fuera de este módulo")
}

 export let configuracionesGlobales = {
    idioma : 'ESP',
    logueado: false
}

export default function funcionPrincipal(){
    console.log("Ejecutando la función principal");
}

// export {functionExportada, configuracionesGlobales}