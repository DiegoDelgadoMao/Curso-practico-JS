let notas = [[6,1],[7,1],[5,1],[7,1],[8,1],[6,5]]

let multiplicacionNotaPonderado = notas.map(arregloConNotas => arregloConNotas[0] * arregloConNotas[1])

let sumatoriaDeNotas = multiplicacionNotaPonderado.reduce((elementoPrevio,elementoActual)=> elementoPrevio + elementoActual)

let ponderados = notas.map(notasArray => notasArray[1]);

let sumatoriaDePonderado = ponderados.reduce((elementoPrevio,elementoActual)=>elementoPrevio + elementoActual);

const resultadoPonderado = sumatoriaDeNotas / sumatoriaDePonderado;