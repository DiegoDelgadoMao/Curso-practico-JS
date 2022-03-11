const calcularDescuento = ()=>{
	const datoPrecio = Number(document.getElementById('precio').value);
	const datoDescuento = Number(document.getElementById('descuento').value);
	let contenedorEtiquetaDescuento = document.getElementById('resultado-etiqueta-p');
	let contenedorPrecio = document.getElementById('resultado-descuento');
	const resultadoDato  = calcularPrecioConDescuento(datoPrecio,datoDescuento);
	contenedorPrecio.textContent = resultadoDato;
	contenedorEtiquetaDescuento.textContent = datoDescuento
}

const calcularPrecioConDescuento = (precio,descuento)=>{
	let porcentajePrecioDescuento = 100 - descuento;
	let precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
	return precioConDescuento;
}
