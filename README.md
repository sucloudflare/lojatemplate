# Loja de Roupas

Bem-vindo ao repositório da Loja de Roupas! Este projeto é uma aplicação web para exibir e gerenciar produtos de vestuário. Os usuários podem visualizar produtos, realizar pesquisas, adicionar itens ao carrinho e efetuar compras.

## Funcionalidades

### 1. Renderização de Produtos
- **`renderProducts(productsToRender)`**: Renderiza a lista de produtos na grid principal. Aceita um array de produtos como argumento.

### 2. Renderização de Produtos em Destaque
- **`renderFeaturedProducts()`**: Renderiza os produtos que estão em destaque, exibindo-os em uma seção separada.

### 3. Criação de Cartões de Produto
- **`createProductCard(product)`**: Cria e retorna um elemento de cartão de produto com as informações do produto, incluindo imagem, título, preço e botões para comprar.

### 4. Adição ao Carrinho
- **`addToCart(title, name, size, city, address)`**: Adiciona um produto ao carrinho. Coleta as informações do usuário (nome, tamanho, cidade e endereço) e armazena no `localStorage`.

### 5. Atualização do Contador do Carrinho
- **`updateCartCount()`**: Atualiza a contagem de itens no carrinho exibida no menu de navegação.

### 6. Pesquisa de Produtos
- **`searchProducts()`**: Filtra os produtos com base no termo de pesquisa inserido pelo usuário e renderiza os produtos correspondentes.

### 7. Redefinir Pesquisa
- **`resetSearch()`**: Limpa o campo de busca e exibe todos os produtos novamente. O botão de redefinir aparece somente quando há produtos filtrados.

### 8. Alternar Menu de Compra
- Adiciona funcionalidade de mostrar ou ocultar o menu de compra ao clicar no botão "Comprar" em cada produto.

## Estrutura do Projeto
- **HTML**: A estrutura da página é definida em um arquivo HTML.
- **CSS**: Estilos básicos são aplicados usando um arquivo CSS externo e estilos internos.
- **JavaScript**: A lógica do projeto é gerenciada através de um script que manipula a DOM, gerencia o estado do carrinho e realiza operações de pesquisa.

## Como Usar
1. Clone o repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Explore os produtos, use a barra de pesquisa para encontrar itens específicos e adicione produtos ao carrinho.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
