const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyConvert = document.querySelector(".currency-convert")

function covertvalues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".value-to-convert")
    const currencyValueConverted = document.querySelector(".value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.6
    const bitToday = 605885.81


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToday)
    }

    
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",
            { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToday)
    }

    
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",
            { style: "currency", currency: "BTC" }).format(inputCurrencyValue / bitToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById ("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src =  "./assests/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src =  "./assests/euro.png"
    }

    
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src =  "./assests/brasil 2.png"
    }

    
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src =  "./assests/libra 1.png"
    }

    
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src =  "./assests/bitcoin 1.png"
    }

    covertvalues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", covertvalues)