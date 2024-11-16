//Definimos las variables
const cantidad = document.getElementById("cantidad");
const divisa_origen = document.getElementById("divisa-principal");
const img_divisa_origen = document.getElementById("img-divisa-origen");
const divisa_final = document.getElementById("divisa-final");
const img_divisa_final = document.getElementById("img-divisa-final");
const resultado = document.getElementById("resultado");
const boton_calcular = document.getElementById("btn_calcular");
const api_key = "cced7cb933f509ab441a2d98";

//Cargamos las opciones del select
const selectOptions = document.querySelectorAll("#selector-divisas select"); //Cogemos todos los select que necesitemos, en esta caso solo dos
for(let i=0; i < selectOptions.length; i++){ //Recorremos los selects 
    for(currency_code in country_list){ //Para cada codigo ISO de cada pais
        let option = `<option value="${currency_code}">${currency_code}</option>`; //Creamos la etiqueta opcion, será la opcion del select que añadiremos para cada pais
        selectOptions[i].insertAdjacentHTML("beforeend", option); //En el select seleccionado, insertamos el html al final, sin modificar lo que ya teniamos
    }
}

function updadteFlag(selectElement, flagElement){
    let selectedCurrency = selectElement.value;
    flagCode = country_list[selectedCurrency];
    flagElement.src = `https://flagsapi.com/${flagCode}/flat/64.png`;
}

function calcularResultado(){
    let cant = cantidad.value;
    if(cant == "" || cant == "0"){
        cant.value = 1;
        cant = 1;
    }

    let url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${divisa_origen.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[divisa_final.value];
        changed_currency = (cant * exchangeRate).toFixed(2);

        resultado.innerText =  `${cantidad.value} ${divisa_origen.value} = ${changed_currency} ${divisa_final.value}`;
    });
}

divisa_origen.addEventListener("change", () => updadteFlag(divisa_origen, img_divisa_origen));
divisa_final.addEventListener("change", () => updadteFlag(divisa_final, img_divisa_final));
boton_calcular.addEventListener('click', e => {
    e.preventDefault();
    calcularResultado();
});

//Actualizamos banderas al cargar pagina
updadteFlag(divisa_origen, img_divisa_origen)
updadteFlag(divisa_final, img_divisa_final)