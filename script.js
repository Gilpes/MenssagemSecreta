//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

let textinput = document.getElementById('texto');
const btnCriptografar= document.querySelector(".criptografadorbotao");
const btnDescriptografar= document.querySelector(".descriptografadorbotao");


btnCriptografar.addEventListener("click",function() {
criptografar()
})
function criptografar(){
    let texto = textinput.value;

    let resultado = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    document.getElementById("texto2").innerHTML= resultado;
    }

btnDescriptografar.addEventListener("click",function() {
    descriptografar()
    })
    function descriptografar(){
        let texto = textinput.value;

        let resultado = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        document.getElementById("texto2").innerHTML= resultado;
    }

    function copiar() {
        navigator.clipboard.writeText(document.getElementById("texto2").textContent)
    }


