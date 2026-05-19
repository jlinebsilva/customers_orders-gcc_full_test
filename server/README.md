# Customers Orders | Backend

<!-- ## -->

## Rodando servidor
- Instale as dependências (sem risco de atualização de pacotes)

    ```bash
    npm ci
    ```

- Renomeie o arquivo `example.env` para `.env`, e digite as informações nas variáveis de ambiente

- Inicie o servidor

    ```bash
    npm run server
    ```

<!-- -  -->

<br/>

## USO DA API

A API utiliza autenticação JWT. Para acessar endpoints protegidos, inclua o token no header: `Authorization: Bearer <token>`

### AUTENTICAÇÃO

#### >> Registrar Usuário

- **Método**: POST

- **Endpoint**: `/register`

- **Corpo da Requisição** (JSON):

  ```json
  {
    "cpf": "12345678900",
    "rg": "123456789",
    "name": "João Silva",
    "age": 30,
    "login": "joao",
    "email": "joao@example.com",
    "password": "senha123"
  }
  ```

- **Resposta**: Dados do usuário criado

#### >> Login

- **Método**: POST

- **Endpoint**: `/login`

- **Corpo da Requisição** (JSON):

  ```json
  {
    "login": "joao",
    "password": "senha123"
  }
  ```
  
- **Resposta**: `{ "token": "jwt_token_aqui" }`

### CLIENTES

#### >> Listar Clientes

- **Método**: GET

- **Endpoint**: `/customer`

- **Autenticação**: Necessária

- **Resposta**: Lista de clientes (JSON array)

#### >> Atualizar Cliente

- **Método**: PUT

- **Endpoint**: `/customer/:id`

- **Autenticação**: Necessária

- **Corpo da Requisição** (JSON): Campos a atualizar (ex: name, email)

- **Resposta**: `{ "msg": "Updated" }`

#### >> Deletar Cliente

- **Método**: DELETE

- **Endpoint**: `/customer/:id`

- **Autenticação**: Necessária

- **Resposta**: `{ "msg": "Deleted" }`

### PEDIDOS

#### >> Criar Pedido

- **Método**: POST

- **Endpoint**: `/orders`

- **Autenticação**: Necessária

- **Corpo da Requisição** (JSON):

  ```json
  {
    "description": "Descrição do pedido",
    "userId": 1
  }
  ```

- **Resposta**: Dados do pedido criado

#### >> Listar Pedidos

- **Método**: GET

- **Endpoint**: `/orders`

- **Autenticação**: Necessária

- **Parâmetros de Query**: `userId` (opcional, para filtrar por usuário)

- **Resposta**: Lista de pedidos (JSON array)

<br/>

## Tecnologias / Ferramentas Usadas

- [Node.js](https://nodejs.org/pt-br)
- [Express](https://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
<!-- - [Swagger]() -->
<!-- - []() -->
<!-- - []() -->
<!-- - []() -->