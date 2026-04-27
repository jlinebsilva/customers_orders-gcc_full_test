# Customers Orders

> #### GCC Full Test

<br />

Sistema simples de criação de clientes e pedidos vinculados.

<br />

## REQUISITOS DO TESTE

> [Requisitos do Sistema FullStack](./Teste-FullStack.md)

<br />

## BAIXAR AS DEPENDÊNCIAS E EXECUTAR

### SERVIDOR 

- Entre na pasta `server`

- Instale os pacotes

    ```bash
    npm i
    ```

- Configure o banco de dados PostgreSQL e as variáveis de ambiente:
  - Renomeie o arquivo `EXAMPLE.env` para `.env`
  - Preencha as variáveis:
    - `DB_NAME`: Nome do banco de dados
    - `DB_USER`: Usuário do banco
    - `DB_PASSWORD`: Senha do banco
    - `DB_HOST`: Host do banco (padrão: localhost)
    - `PORT`: Porta do servidor (ex: 3000)
    - `JWT_SECRET`: Chave secreta para JWT (ex: uma string aleatória)

- Execute as migrações do banco (se necessário, usando Sequelize CLI)

- Inicie o servidor

    ```bash
    npm run server
    ```

- O servidor estará rodando na porta definida (ex: http://localhost:3000)

### INTERFACE

- Abra um novo terminal (separado do servidor)

- Acesse a pasta `web`, e instale as dependências

    ```bash
    npm i
    npm run dev
    ```

- A interface estará disponível em http://localhost:5173 (ou similar, conforme Vite)

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

## STACK

### FRONTEND

- [React](https://vite.dev/)
- [TypeScript]
- [Tailwind CSS](https://tailwindcss.com/)
- [axios](https://axios.rest/)
- [React Router](https://reactrouter.com/)

### BACKEND

- [Node.js]
- [TypeScript]
- [Express]
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv]
- [Cors]
- [Sequelize]
- [PostgreSQL]


[Next]: https://nextjs.org/

[TypeScript]: https://www.typescriptlang.org/

[Node.js]: https://nodejs.org/
[Express]: https://expressjs.com/
[Cors]: https://www.npmjs.com/package/cors
[dotenv]: https://www.npmjs.com/package/dotenv
[Sequelize]: https://sequelize.org/
[PostgreSQL]: https://www.postgresql.org/