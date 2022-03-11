let calcularPromedioAritmetico = (lista) =>{
	let sumaLista = lista.reduce((valorAcomulado = 0,elementoActual) => valorAcomulado + elementoActual);
	let promedioLista = sumaLista / lista.length;
	return promedioLista;
}

const calcularMediana = (lista) =>{
	lista.sort((a,b)=>a-b);
	let mitadLista = parseInt(lista.length / 2);

	function parOInpar (numero){
		return ((numero % 2) === 0);
	}

	if(parOInpar(mitadLista)){
		let elemento1 = lista[mitadLista];
		let elemento2 = lista[mitadLista - 1];
		let resultadoMedia = calcularPromedioAritmetico([elemento1,elemento2]);
		return resultadoMedia
	}else{
		let mediana = lista[mitadLista];
		return mediana
	}
}

const calcularModa = (array)=>{
	const arrayObject = {};

	array.map(element=>{
		if(arrayObject[element]){
			arrayObject[element] += 1;
		}else{
			arrayObject[element] = 1;
		}
	})

	const objetoArray = Object.entries(arrayObject).sort((a,b)=>a[1] - b[1]);
	let moda = objetoArray[objetoArray.length - 1][0];
	return moda;
}


let obtenerPromedio = () =>{
	let promedioDato = document.getElementById('promedio-dato').value;
	let containerResultadoHtml = document.getElementById('imprimir-resultado-promedio');
	let promedioArray = promedioDato.split(',');
	promedioArray = promedioArray.map(element=>{
		return Number(element)
	})
	let resultadoPromedio = calcularPromedioAritmetico(promedioArray)
	containerResultadoHtml.textContent = `el promedio de tus datos es: ${resultadoPromedio}`;
}

let obtenerMediana = () =>{
	let mediaDato = document.getElementById('mediana-dato').value;
	let containerResultadoHtml = document.getElementById('imprimir-resultado-mediana');
	let medianaArray = mediaDato.split(',');
	medianaArray = medianaArray.map(element=>{
		return Number(element)
	})
	let resultadoMediana = calcularMediana(medianaArray)
	containerResultadoHtml.textContent = `La media de tus datos es: ${resultadoMediana}`;
}

let obtenerModa = ()=>{
	let modaDato = document.getElementById('moda-dato').value;
	let containerResultadoHtml = document.getElementById('imprimir-resultado-moda');
	let modaArray = modaDato.split(',');
	modaArray = modaArray.map(element=>{
		return Number(element)
	})
	let resultadoModa = calcularModa(modaArray)
	containerResultadoHtml.textContent = `La moda de tus datos es: ${resultadoModa}`;
}

