const meuBotao = document.getElementById("button")
const conteudoPricipal = document.getElementById("conteudoPrincipal")

//alert(conteudoPricipal.textContent)
//console.log(conteudoPricipal.innerText)
//console.log("Hello Word")

meuBotao.addEventListener("click", () => {
    alert("botao clicado")
})

meuSubmit.addEventListener("click", () => {
    alert("botao submit foi clicado")
})

//evento
//"mousedown" é acionado quando o botão do mouse é pressionado sobre  o botao
meuBotao.addEventListener("mousedown", () => {
    alert("Botao foi pressionado!")
})

//evento
//"mouseup" é acionado quando o botão do mouse é liberado apos pressionar o botao
meuBotao.addEventListener("mouseup", () => {
    alert("Botao foi solto!")
})

//evento
//"mouseenter" é acionado quando o ponteiro do mouse entra na area do botão
meuBotao.addEventListener("mouseenter", () => {
    alert("Mouse entrou no botao!")
})

//evento
//"mouseleave" é acionado quando o botão recebe o foco, seja por clique ou por navegação com 
meuBotao.addEventListener("mouseleave", () => {
    alert("Mouse saiu do botao!")
})

//"focus" é acionado quando o ponteiro do mouse sai da area do botão
meuBotao.addEventListener("focus", () => {
    alert("boato recebeu foco!")
})

//"blur" é acionado quando o botao perde foco, seja por clique ou por
meuBotao.addEventListener("focus", () => {
    alert("boato perdeu foco!")
})

