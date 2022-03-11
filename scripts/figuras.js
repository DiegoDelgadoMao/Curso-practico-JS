// código del cuadrado
let datoRadioCuadrado = document.getElementById('radio-cuadrado');
let contenedorResultadoCuadrado = document.getElementById('resultado-p-cuadrado');

const obtenerDatosCuadrado = () =>{
	let valorRadioCuadrado = Number(datoRadioCuadrado.value);
	let resultadoPerimetro = perimetroCuadrado(valorRadioCuadrado);
	let resultadoArea = areaCuadrado(valorRadioCuadrado);
	contenedorResultadoCuadrado.textContent = `El perímetro es: ${resultadoPerimetro}, El área es: ${resultadoArea}`;
}

const perimetroCuadrado = lado => (lado * 4) + 'cm';

const areaCuadrado = lado => (lado * lado) + 'cm^2';


// CODIGO TRIANGULO

let datoLado1 = document.getElementById('triangulo-lado1');
let datoLado2 = document.getElementById('triangulo-lado2');
let datoBase = document.getElementById('triangulo-base');
let datoAltura = document.getElementById('triangulo-altura');
let contenedorResultadoTriangulo = document.getElementById('resultado-p-triangulo');

let obtenerDatosTriangulo = ()=>{
	let valorLado1 = Number(datoLado1.value);
	let valorLado2 = Number(datoLado2.value);
	let valorBase = Number(datoBase.value);
	let valorAltura = Number(datoAltura.value);

	let resultadoPerimetro = perimetroTriangulo(valorLado1,valorLado2,valorBase);
	let resultadoArea = areaTriangulo(valorBase,valorAltura);
	contenedorResultadoTriangulo.textContent = `el perímetro es: ${resultadoPerimetro}cm. El área es: ${resultadoArea}cm^2`
}

const perimetroTriangulo = (lado1,lado2,base)=> lado1 + lado2 + base;

const areaTriangulo = (base,altura)=> ((base * altura) / 2);

// CODIGO CIRCULO!!1

// PI
const PI = Math.PI;

// Circuferencia

let resultadoHtml = document.getElementById('resultado-p-circulo');
let ObtenerDatosCirculo = ()=>{
	let datoUsuario = Number(document.getElementById('radio-circulo').value);
	let resultadoArea = areaCirculo(datoUsuario);
	let resultadoPerimetro = perimetroCirculo(datoUsuario);
	resultadoHtml.textContent = `El perímetro es: ${resultadoArea}cm, El área es: ${resultadoPerimetro}cm^2`;
}

const diametroCirculo = radio => radio * 2;

const perimetroCirculo = radio=>{
	const diametro = diametroCirculo(radio);
	return (diametro * PI)
}
const areaCirculo = radio=> ((radio * radio) * PI);

// ISOCELES

const calcularAlturaIsoceles = (lado1,lado2,base) =>{
	baseMitad = base / 2;
	potenciaLado1 = lado1**2;
	potenciaBase = baseMitad**2;
	const RaizCuadrada = Math.sqrt(potenciaLado1 - potenciaBase);
	return RaizCuadrada;
}

let obtenerDatosIsosceles = () =>{
	let datoLado1 = Number(document.getElementById('isoceles-lado1').value);
	let datoLado2 = Number(document.getElementById('isoceles-lado2').value);
	let datoBase = Number(document.getElementById('isoceles-base').value);

	let contenedorResultado = document.getElementById('resultado-p-isoceles');
	if(datoLado1 !== datoLado2){
		contenedorResultado.textContent = `Los lados del isoceles deben coincidir`
	}else{
		let resultado = calcularAlturaIsoceles(datoLado1,datoLado2,datoBase);
		contenedorResultado.textContent = `La altura es: ${resultado}`;
	}
}
