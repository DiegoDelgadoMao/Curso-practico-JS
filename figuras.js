// código del cuadrado
let datoRadioCuadrado = document.getElementById('radio-cuadrado');
let contenedorResultadoCuadrado = document.getElementById('resultado-p-cuadrado');

const obtenerPerimetroCuadrado = () =>{
	let valorRadioCuadrado = Number(datoRadioCuadrado.value);
	let resultado = perimetroCuadrado(valorRadioCuadrado);
	contenedorResultadoCuadrado.textContent = `El perimetro es: ${resultado}`;
}

const obtenerAreaCuadrado = ()=>{
	let valorRadioCuadrado = Number(datoRadioCuadrado.value);
	let resultado = areaCuadrado(valorRadioCuadrado);
	contenedorResultadoCuadrado.textContent = `El área es: ${resultado}`;
}

const perimetroCuadrado = lado => (lado * 4) + 'cm';

const areaCuadrado = lado => (lado * lado) + 'cm^2';


// CODIGO TRIANGULO
let datoLado1 = document.getElementById('triangulo-lado1');
let datoLado2 = document.getElementById('triangulo-lado2');
let datoBase = document.getElementById('triangulo-base');
let datoAltura = document.getElementById('triangulo-altura');
let contenedorResultadoTriangulo = document.getElementById('resultado-p-triangulo');

let obtenerPerimetroTriangulo = ()=>{
	let valorLado1 = Number(datoLado1.value);
	let valorLado2 = Number(datoLado2.value);
	let valorBase = Number(datoBase.value);

	let resultadoPerimetro = perimetroTriangulo(valorLado1,valorLado2,valorBase);
	contenedorResultadoTriangulo.textContent = `el perimetro es: ${resultadoPerimetro}cm`
}

let obtenerAreaTriangulo = ()=>{
	let valorBase = datoBase.value;
	let valorAltura = datoAltura.value;

	let resultadoArea = areaTriangulo(valorBase,valorAltura);
	contenedorResultadoTriangulo.textContent = `La área es: ${resultadoArea}cm^2`
}

const perimetroTriangulo = (lado1,lado2,base)=> lado1 + lado2 + base;

const areaTriangulo = (base,altura)=> ((base * altura) / 2);

// CODIGO CIRCULO!!1

// Diámetro
const diametroCirculo = radio => radio * 2;

// PI
const PI = Math.PI;

// Circuferencia
let resultadoHtml = document.getElementById('resultado-p-circulo');
let ObtenerPerimetroCirculo = ()=>{
	let datoUsuario = Number(document.getElementById('radio-circulo').value);
	let resultado = perimetroCirculo(datoUsuario);
	resultadoHtml.textContent = `El perimetro es: ${resultado}cm`;
}
const perimetroCirculo = radio=>{
	const diametro = diametroCirculo(radio);
	return (diametro * PI)
}

// Área
const obtenerArea = ()=>{
	let datoUsuario = document.getElementById('radio-circulo').value;
	let resultado = areaCirculo(datoUsuario);
	resultadoHtml.textContent = `El área es: ${resultado}cm^2`;
}
const areaCirculo = radio=> ((radio * radio) * PI);
