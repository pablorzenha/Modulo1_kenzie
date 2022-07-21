//BODY, ARRAYS E IMPORTANTES
const corpo                                     = document.body
let arrayCategorias                             = ["Todos","Acessórios","Calçados","Camisetas"]
let arrayDeBusca                                = []
let carrinhoCompras                             = []
let carrinhoFiltro                              = []
let getOccurrences = ( array , value ) => array.reduce((acc, item) => value === item ? acc + 1: acc, 0) 

//INICIO RENDERIZAÇÃO INDEX DO SITE
function renderizarSite(){
    //cabeçalho
        const header                            = document.createElement("header")
        //container flex
        const headerContainer                   = document.createElement("div")
        headerContainer.setAttribute("class","headerContainer")
        //container logo e nav
        const logoContainer                     = document.createElement("logoContainer")
        const navContainer                      = document.createElement("navContainer")
        logoContainer.setAttribute("class","logoContainer")
        navContainer.setAttribute("class","navContainer")
        // logo e botoes do nav
        const logo                              = document.createElement("h1")
        const btnTodos                          = document.createElement("button")
        btnTodos.setAttribute("id",0)
        const btnAcessor                        = document.createElement("button")
        btnAcessor.setAttribute("id",1)
        const btnCalca                          = document.createElement("button")
        btnCalca.setAttribute("id",2)
        const btnCamis                          = document.createElement("button")
        btnCamis.setAttribute("id",3)
        //texto
        logo.innerText                          = "WearTake"
        btnTodos.innerText                      = "Todos"
        btnAcessor.innerText                    = "Acessórios"
        btnCalca.innerText                      = "Calçados"
        btnCamis.innerText                      = "Camiseta"
        // append
        navContainer.append(btnTodos,btnAcessor,btnCalca,btnCamis)
        logoContainer.appendChild(logo)
        headerContainer.append(logoContainer,navContainer)
        header.appendChild(headerContainer)

    //main
        //vitrine
        const main                          = document.createElement("main")
        const containerProdutos             = document.createElement("section")
        containerProdutos.setAttribute("class","containerProdutos")
        //containerCarrinho
        const containerCarrinho             = document.createElement("section")
        containerCarrinho.setAttribute("class","containerCarrinho")
        //append
        main.append(containerProdutos,containerCarrinho)

        corpo.append(header,main)
   
}

function renderizarVitrine(array, categoriaSelecionada,value){
    const containerProdutos                     = document.querySelector(".containerProdutos")
    containerProdutos.innerText                 = ""

        if(array.length == 0 || (array.every(elem => elem.tag[0] !== categoriaSelecionada) && categoriaSelecionada !== "Todos") ){ 
            if(array.length == 0){
            const valueNenhum = document.createElement("h2")
            valueNenhum.innerText = `Nenhum item encontrado para '${value}'`
            valueNenhum.setAttribute("class","nenhumProduto")

            const ulNenhum                      =  document.createElement("ul")
            const liUm                          = document.createElement("li")
            liUm.innerText                      = "Revise a ortografia da palavra"
            const liDois                        = document.createElement("li")
            liDois.innerText                    = "Utilize palavras mais genéricas ou menos palavras."
            const liTres                        = document.createElement("li")
            liTres.innerText                    =   "Navegue pelas categorias para encontrar um produto similar"
            ulNenhum.append(liUm,liDois,liTres)
            containerProdutos.append(valueNenhum,ulNenhum)
            inputBusca.value                    = ""
            }else{
            const valueNenhum                   = document.createElement("h2")
            valueNenhum.innerText               = `Nenhum item encontrado na categoria '${categoriaSelecionada}'`
            valueNenhum.setAttribute("class","nenhumProduto")
            const ulNenhum                      =  document.createElement("ul")
            const liTres                        = document.createElement("li")
            liTres.innerText                    =   "Navegue pelas categorias para encontrar um produto similar"
            ulNenhum.append(liTres)
            containerProdutos.append(valueNenhum,ulNenhum)
            inputBusca.value                    = ""
            }
        }else if(categoriaSelecionada == "Todos"){
            array.forEach(elem => { 
                //Card
                const cardProduto               = document.createElement("div")
                cardProduto.setAttribute("class","cardProduto")
                //elementos dentro card
                    //img
                    const figureProduto         = document.createElement("figure")
                    const imgProduto            = document.createElement("img")
                    imgProduto.setAttribute("src",elem.img.slice(1))
                    figureProduto.appendChild(imgProduto)
                    //categoria
                    const categoriaTipo = document.createElement("span")
                    if(elem.tag[0] == "Camisetas"){
                        categoriaTipo.setAttribute("class","cardCamiseta")
                    }else{
                        categoriaTipo.setAttribute("class","cardAcessorio")
                    }
                    const categoriaNome         = document.createElement("p")
                    categoriaNome.innerText     = elem.tag[0]
                    categoriaTipo.appendChild(categoriaNome)
                    //Descricoes
                    const nomeProduto           = document.createElement("h2")
                    const descricaoProduto      = document.createElement("p")
                    const precoProduto          = document.createElement("p")
                    const btnProduto            = document.createElement("button")
                    btnProduto.setAttribute("id",elem.id)
                    nomeProduto.innerText       = elem.nameItem
                    descricaoProduto.innerText  = elem.description
                    precoProduto.innerText      = `R$ ${elem.value.toFixed(2)}`
                    btnProduto.innerText        = elem.addCart
                    //inserindo no card
                    cardProduto.append(figureProduto,categoriaTipo,nomeProduto,descricaoProduto,precoProduto,btnProduto)
                    containerProdutos.appendChild(cardProduto)
                }) 
        }else{
            array.forEach(elem => { 
            if(elem.tag[0] == categoriaSelecionada){
            //Card
            const cardProduto                   = document.createElement("div")
            cardProduto.setAttribute("class","cardProduto")
            //elementos dentro card
                //img
                const figureProduto             = document.createElement("figure")
                const imgProduto                = document.createElement("img")
                imgProduto.setAttribute("src",elem.img.slice(1))
                figureProduto.appendChild(imgProduto)
                //categoria
                const categoriaTipo = document.createElement("span")
                if(elem.tag[0] == "Camisetas"){
                    categoriaTipo.setAttribute("class","cardCamiseta")
                }else{
                    categoriaTipo.setAttribute("class","cardAcessorio")
                }
                const categoriaNome             = document.createElement("p")
                categoriaNome.innerText         = elem.tag[0]
                categoriaTipo.appendChild(categoriaNome)
                //Descricoes
                const nomeProduto               = document.createElement("h2")
                const descricaoProduto          = document.createElement("p")
                const precoProduto              = document.createElement("p")
                const btnProduto                = document.createElement("button")
                btnProduto.setAttribute("id",elem.id)
                nomeProduto.innerText           = elem.nameItem
                descricaoProduto.innerText      = elem.description
                precoProduto.innerText          = `R$ ${elem.value.toFixed(2)}`
                btnProduto.innerText            = elem.addCart
                //inserindo no card
                cardProduto.append(figureProduto,categoriaTipo,nomeProduto,descricaoProduto,precoProduto,btnProduto)
                containerProdutos.appendChild(cardProduto)
            }
            })
        }
}

function renderizarCarrinho(){
    const containerCarrinho                     = document.querySelector(".containerCarrinho")
    containerCarrinho.innerText                 = ""
    //Pesquisa
        const containerPesquisa                 = document.createElement("section")
        containerPesquisa.setAttribute("class","containerPesquisa")
        const inputPesquisa                     = document.createElement("input")
        inputPesquisa.setAttribute("placeholder","Digite aqui sua pesquisa")
        const buttonPesquisa                    = document.createElement("button")
        buttonPesquisa.innerText                = "Pesquisar"
        containerPesquisa.append(inputPesquisa,buttonPesquisa)
    
    //Carrinho
        const carrinhoDeCompras                 = document.createElement("section")
        carrinhoDeCompras.setAttribute("class","carrinhoDeCompras")
        const tituloCarrinho                    = document.createElement("h2")
        tituloCarrinho.innerText                = "Carrinho de Compras"
        //itens carrinho
        const listaProdutos                     = document.createElement("div")
        listaProdutos.setAttribute("class","listaProdutos")
        const detalhesCart                      = document.createElement("div")
        detalhesCart.setAttribute("class","detalhesCart")
        //condicao para carrinho vazio
        const carrinhoVazio                     = document.createElement("p")
        carrinhoVazio.innerText                 = "Carrinho Vázio"
        const adicioneItens                     = document.createElement("p")
        adicioneItens.innerText                 = "Adicione itens"
        listaProdutos.append(carrinhoVazio,adicioneItens)
        carrinhoDeCompras.append(tituloCarrinho,listaProdutos,detalhesCart)
        containerCarrinho.append(containerPesquisa,carrinhoDeCompras)

}

function index(){
    renderizarSite()
    renderizarVitrine(data,"Todos")
    renderizarCarrinho()
}

index()

//ESCUTADORES
const secaoVitrine                              = document.querySelector(".containerProdutos")
const secaoCart                                 = document.querySelector(".listaProdutos")
const navigation                                = document.querySelector(".navContainer")
let inputBusca                                  = document.querySelector(".containerPesquisa input")
let buttonBusca                                 = document.querySelector(".containerPesquisa button")
secaoVitrine.addEventListener("click",adicionandoProduto)
secaoCart.addEventListener("click",removerProduto)
navigation.addEventListener("click",produtosPorCategorias)
buttonBusca.addEventListener("click",buscaProdutos)

//FUNCOES ADICIONAR, REMOVER E PESQUISA
function adicionandoProduto(event){
    (event.target.tagName == "BUTTON" ?secaoCart.innerText="" + data.forEach(elem => {(elem.id == event.target.id? carrinhoCompras.push(elem) :"")}) : ""); renderizarCart() 
}

function renderizarCart(){
   if(carrinhoCompras.length > 0){
    const detalhesCart = document.querySelector(".detalhesCart")
    secaoCart.innerText                 = ""
    detalhesCart.innerText                  = ""
    carrinhoCompras.forEach(elem => {
        if(carrinhoFiltro.includes(elem) == false){
            carrinhoFiltro.push(elem)
        }
    })

    carrinhoFiltro.forEach((elem,index) => {
        //crio o cart no carrinho
        let produtoCart                     =  document.createElement("div")
        produtoCart.setAttribute("class","produtoCart")
        //crio img e textos
            //img
            const imgCart                   = document.createElement("img")
            imgCart.setAttribute("src",elem.img.slice(1))
            const descricoes                = document.createElement("div")
            //descricoes
            const tituloCart                = document.createElement("h3")
            tituloCart.innerText            = `${getOccurrences(carrinhoCompras,elem)}x ${elem.nameItem}`
            const precoCart                 = document.createElement("p")
            precoCart.innerText             = `R$ ${elem.value.toFixed(2)}(un.)`              
            const precoCartTotal            = document.createElement("p")
            precoCartTotal.innerText        = `R$ ${(getOccurrences(carrinhoCompras,elem)*elem.value).toFixed(2)}(total)`
            const btnCart                   = document.createElement("button")
            btnCart.setAttribute("id",index)
            btnCart.innerText = "Remover"
            descricoes.append(tituloCart,precoCart,precoCartTotal,btnCart)
        //adiciono variaveis no cart
        produtoCart.append(imgCart,descricoes)
        secaoCart.appendChild(produtoCart)
    })

    //Soma quantidade e total
    const quantidadeContainer               = document.createElement("section")
    const totalContainer                    = document.createElement("section")
    const quantidadeTexto                   = document.createElement("p")
    const quantidadeValor                   = document.createElement("p")
    const totalTexto                        = document.createElement("p")
    const totalValor                        = document.createElement("p")
    quantidadeTexto.innerText               = "Quantidade:"
    totalTexto.innerText                    = "Total:"
    quantidadeValor.innerText               = carrinhoCompras.length
    totalValor.innerText                    = "R$ " + (carrinhoCompras.reduce((valorFinal, elem) => valorFinal + elem.value, 0)).toFixed(2)
    quantidadeContainer.append(quantidadeTexto,quantidadeValor)
    totalContainer.append(totalTexto,totalValor)
    detalhesCart.append(quantidadeContainer,totalContainer)
}else{
    const detalhesCart = document.querySelector(".detalhesCart")
    secaoCart.innerText                 = ""
    detalhesCart.innerText                  = ""
    const carrinhoVazio                     = document.createElement("p")
    carrinhoVazio.innerText                 = "Carrinho Vázio"
    const adicioneItens                     = document.createElement("p")
    adicioneItens.innerText                 = "Adicione itens"
    secaoCart.append(carrinhoVazio,adicioneItens)
}
}

function removerProduto(event){
    if(event.target.tagName == "BUTTON"){ 
        if(getOccurrences(carrinhoCompras,carrinhoCompras[carrinhoCompras.indexOf(carrinhoFiltro[event.target.id])]) == 1){
            let elemento = carrinhoFiltro[event.target.id]
            carrinhoCompras.splice(carrinhoCompras.indexOf(elemento),1)
            carrinhoFiltro.splice(carrinhoFiltro.indexOf(elemento),1)
            console.log(elemento,carrinhoFiltro,"oi")
        }else{
        carrinhoCompras.splice(carrinhoCompras.indexOf(carrinhoFiltro[event.target.id]),1)
        }
        renderizarCart() 
    }
    
}

function produtosPorCategorias(event){
    if(event.target.tagName == "BUTTON"){
        arrayCategorias.forEach((elem,index) => (index == Number(event.target.id) ? renderizarVitrine(data, elem) : ""))
    }
}

function buscaProdutos(){
    arrayDeBusca.length                     = 0
    data.forEach(elem => {(elem.nameItem.toLowerCase().includes(inputBusca.value.toLowerCase()) == true ? arrayDeBusca.push(elem) : "")})
    renderizarVitrine(arrayDeBusca,"Todos",inputBusca.value)
}