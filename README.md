# Loja de Roupas

Bem-vindo ao repositório da Loja de Roupas! Este projeto é uma aplicação web para exibir e gerenciar produtos de vestuário. Os usuários podem visualizar produtos, realizar pesquisas, adicionar itens ao carrinho e efetuar compras.

## Funcionalidades

### 1. Renderização de Produtos
- **`renderProducts(productsToRender)`**: Renderiza a lista de produtos na grid principal. Aceita um array de produtos como argumento.

### 2. Renderização de Produtos em Destaque
- **`renderFeaturedProducts()`**: Renderiza os produtos que estão em destaque, exibindo-os em uma seção separada.

### 3. Criação de Cartões de Produto
- **`createProductCard(product)`**: Cria e retorna um elemento de cartão de produto com as informações do produto, incluindo imagem, título, preço e botões para comprar.

### 4. Renderização do Carrinho
- **`renderCart()`**: Exibe os itens adicionados ao carrinho. Limpa a lista atual e preenche com os produtos armazenados no `localStorage`, incluindo detalhes como título, preço, nome do comprador, tamanho, cidade e endereço.

### 5. Cálculo do Total
- Durante a renderização, o código calcula automaticamente o total dos produtos no carrinho, convertendo os preços em números para somá-los e exibindo o resultado formatado corretamente.

### 6. Envio para WhatsApp
- Um botão permite que os usuários enviem as informações do carrinho para um número do WhatsApp. O código compila os detalhes dos produtos e gera um link para facilitar o envio das informações.

### 7. Confirmação de Envio
- Um sistema de confirmação aparece quando o usuário tenta enviar as informações, permitindo que ele cancele ou confirme o envio.

### 8. Remoção Automática de Produtos
- O código inclui uma lógica que exibe um aviso sobre a remoção de produtos após 4 minutos, melhorando a urgência e a experiência do usuário.

### 9. Adição ao Carrinho
- **`addToCart(title, name, size, city, address)`**: Adiciona um produto ao carrinho. Coleta as informações do usuário (nome, tamanho, cidade e endereço) e armazena no `localStorage`.

### 10. Atualização do Contador do Carrinho
- **`updateCartCount()`**: Atualiza a contagem de itens no carrinho exibida no menu de navegação.

### 11. Pesquisa de Produtos
- **`searchProducts()`**: Filtra os produtos com base no termo de pesquisa inserido pelo usuário e renderiza os produtos correspondentes.

### 12. Redefinir Pesquisa
- **`resetSearch()`**: Limpa o campo de busca e exibe todos os produtos novamente. O botão de redefinir aparece somente quando há produtos filtrados.

### 13. Alternar Menu de Compra
- Adiciona funcionalidade de mostrar ou ocultar o menu de compra ao clicar no botão "Comprar" em cada produto.

## Design

### Layout Limpo e Atraente
- O design utiliza um layout simples e intuitivo, com cores suaves e um esquema de cores rosa que proporciona uma estética atraente e feminina.

### Navegação Clara
- A barra de navegação é clara e permite acesso fácil às principais seções do site, como Home, Produtos, Contato e Carrinho.

### Estilo Responsivo
- O design é responsivo, adaptando-se bem a diferentes tamanhos de tela, o que melhora a acessibilidade em dispositivos móveis.

### Estilo dos Itens do Carrinho
- Cada item no carrinho é apresentado com uma borda e fundo suaves, permitindo fácil identificação e leitura das informações.

### Botões Atraentes
- Os botões são estilizados para se destacarem, com cores chamativas e efeitos de hover que proporcionam uma experiência de interação agradável.

## Como Usar
1. Clone o repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Explore os produtos, use a barra de pesquisa para encontrar itens específicos e adicione produtos ao carrinho.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
