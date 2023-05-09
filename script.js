const text = document.getElementById("paragrafo")
const btn = document.getElementById("MeuBotão")
const outroBnt = document.getElementById("outroBotão")
const resposta = document.getElementById("Achou")
const duvida = document.getElementById("TemCerteza")

outroBnt.addEventListener("click", function(){
    outroBnt.classList.add('oculto')
    text.classList.add('oculto')
    duvida.classList.remove('oculto')
})

btn.addEventListener("click", function(){
    text.classList.add('oculto')
    resposta.classList.remove('oculto')
    outroBnt.classList.add('oculto')
    btn.classList.add('oculto')
    duvida.classList.add('oculto')
})