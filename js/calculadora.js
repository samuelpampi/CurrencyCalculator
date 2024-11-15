//Definimos las variables
const cantidad = document.getElementById("cantidad");
const divisa_origen = document.getElementById("divisa-principal");
const img_divisa_origen = document.getElementById("img-divisa-origen");
const divisa_final = document.getElementById("divisa-final");
const img_divisa_final = document.getElementById("img-divisa-final");
const resultado = document.getElementById("resultado");
const boton_calcular = document.getElementById("btn_calcular");

const flags = {
    "EUR": "./img/eur.png",
    "USD": "./img/eeuu.png",
    "GBP": "./img/reino-unido.png",
    "JPY": "./img/japon.png",
    "CHF": "./img/suiza.png",
    "CNY": "./img/china.png",
    "RUB": "./img/rusia.png"
};

function updadteFlag(selectElement, flagElement){
    let selectedCurrency = selectElement.value;
    flagElement.src = flags[selectedCurrency];
    flagElement.alt = selectedCurrency;
}

function calcularResultado(event){

}

divisa_origen.addEventListener("change", () => updadteFlag(divisa_origen, img_divisa_origen));
divisa_final.addEventListener("change", () => updadteFlag(divisa_final, img_divisa_final));
boton_calcular.addEventListener('click', () => calcularResultado);

//Iniciar las imagenes al principio de la carga
updadteFlag(divisa_origen, img_divisa_origen);
updadteFlag(divisa_final, img_divisa_final);