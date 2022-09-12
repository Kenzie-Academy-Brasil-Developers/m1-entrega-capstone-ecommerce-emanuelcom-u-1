const cardsProdutos = document.getElementsByClassName("cards")[0];
const ulProdutos = document.createElement("ul");
ulProdutos.classList.add("lista_de_produtos");
cardsProdutos.appendChild(ulProdutos);
const ulCarrinho = document.getElementsByClassName("ul_carrinho")[0];
let contadorProduto = 0;
let soma = 0;
function listarProdutos(products) {
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let template = criarProduto(product);
    ulProdutos.appendChild(template)[0];
  }
}
listarProdutos(data);

function criarProduto(product) {
  let id = product.id;
  let nome = product.nameItem;
  let preco = product.value;
  let categoria = product.tag;
  let descricao = product.description;
  let image = product.img;
  let add = product.addCart;

  let produto = document.createElement("li");
  let divImg = document.createElement("div");
  let imagem = document.createElement("img");
  let divConteudoPrincipal = document.createElement("div");
  let main = document.createElement("main");
  let spanDepartamento = document.createElement("span");
  let tituloProduto = document.createElement("h1");
  let pDescricao = document.createElement("p");
  let strongPreco = document.createElement("strong");
  let divAddAoCarinho = document.createElement("div");
  let botao = document.createElement("button");

  produto.classList.add("produto");
  divImg.classList.add("img_produto");
  divConteudoPrincipal.classList.add("conteudo_produto");
  spanDepartamento.classList.add("departamento");
  tituloProduto.classList.add("titulo_produto");
  pDescricao.classList.add("descricao");
  strongPreco.classList.add("preco_produto");
  divAddAoCarinho.classList.add("add_ao_carrinho");
  botao.classList.add("botao_add_ao_carrinho");

  produto.append(divImg, divConteudoPrincipal);
  divImg.appendChild(imagem);
  divConteudoPrincipal.appendChild(main);
  main.append(
    spanDepartamento,
    tituloProduto,
    pDescricao,
    strongPreco,
    divAddAoCarinho
  );
  divAddAoCarinho.appendChild(botao);

  botao.id = `${id}`;
  imagem.src = image;
  spanDepartamento.innerText = categoria;
  tituloProduto.innerText = nome;
  pDescricao.innerText = descricao;
  strongPreco.innerText = `R$: ${preco.toFixed(2)}`;
  botao.innerText = add;

  return produto;
}

let botoesProduto = document.getElementsByClassName("botao_add_ao_carrinho");

for (let i = 0; i < botoesProduto.length; i++) {
  let botao = botoesProduto[i];

  botao.addEventListener("click", function (event) {
    let elemento = event.target;
    let idElemento = parseInt(elemento.id);
    let produtoEncontrado = procurarProduto(idElemento);

    if (!produtoEncontrado) {
      alert`Produto não está cadastrado no estoque!`;
    } else {
      addAoCarrionho(produtoEncontrado);
    }
  });
}

function procurarProduto(id) {
  for (let j = 0; j < data.length; j++) {
    let produto = data[j];

    if (produto.id == id) {
      return produto;
    }
  }
}

function addAoCarrionho(produto) {
  contadorProduto++;
  document.getElementsByClassName(
    "span_quantidade"
  )[0].innerText = `${contadorProduto}`;
  soma = soma + parseFloat(produto.value.toFixed(2));
  document.getElementsByClassName(
    "span_total"
  )[0].innerText = `R$: ${soma.toFixed(2)}`;

  let liCarrinho = document.createElement("li");
  let imgLiCarrinho = document.createElement("img");
  let divDescricaoCarrinho = document.createElement("div");
  let spanNomeProdutoCarrinho = document.createElement("span");
  let spanValorProdutoCarrinho = document.createElement("span");
  let botaoProdutoCarrinho = document.createElement("button");

  let spanQuantidade = document.getElementsByClassName("span_quantidade")[0];
  let spanTotal = document.getElementsByClassName("span_total")[0];

  liCarrinho.classList.add("produto_carrinho");
  divDescricaoCarrinho.classList.add("descricao_produto_carrinho");
  spanNomeProdutoCarrinho.classList.add("nome_produto_carrinho");
  spanValorProdutoCarrinho.classList.add("valor_produto_carrinho");
  botaoProdutoCarrinho.classList.add("botaoProdutoCarrinho");

  imgLiCarrinho.src = produto.img;
  spanNomeProdutoCarrinho.innerText = produto.nameItem;
  spanValorProdutoCarrinho.innerText = `R$: ${produto.value.toFixed(2)}`;
  botaoProdutoCarrinho.innerText = "Remover produto";

  liCarrinho.append(imgLiCarrinho, divDescricaoCarrinho);
  divDescricaoCarrinho.append(
    spanNomeProdutoCarrinho,
    spanValorProdutoCarrinho,
    botaoProdutoCarrinho
  );

  ulCarrinho.appendChild(liCarrinho);

  botaoProdutoCarrinho.addEventListener("click", function (event) {
    let elemento = event.path[2];
    elemento.remove();
    contadorProduto--;
    document.getElementsByClassName(
      "span_quantidade"
    )[0].innerText = `${contadorProduto}`;
    soma = soma - parseFloat(produto.value.toFixed(2));
    document.getElementsByClassName(
      "span_total"
    )[0].innerText = `R$: ${soma.toFixed(2)}`;
  });
}

/* <li class="produto_carrinho">
    <img src="./img/camiseta_branca.svg" alt="">
    <div class="descricao_produto_carrinho">
        <span class="nome_produto_carrinho">Lightweight Jacket</span>
        <span class="valor_produto_carrinho">R$ 100.00</span>
        <button class="remover_produto">remover produto</button>
    </div>
</li> */

/* <ul class="lista_de_produtos">
    <li class="produto">
        <div class="img_produto">
          <img src="./img/moletom.svg" alt="camiseta preta lisa">
        </div>
        <div class="conteudo_produto">
        <main>
            <span class("departamento")>Camisetas</span> 
            <h1 class("titulo_produto")>Lightweight Jacket</h1>
            <p class("descricao")>Adicione um pouco de energia ao seu
            guarda roupa de inverno com esta
            jaqueta vibrante..</p>
            <strong class("preco_produto")>R$: 100.00</strong>
            <div class="add_ao_carrinho">
            <button class("botao_add_ao_carrinho")>Adicionar ao carrinho</button>
            </div>
        </main>
        </div>
    </li>
</ul> 
*/
