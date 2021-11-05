### Informações Gerais

Projeto desenvolvido para processo seletivo da Ebytr.

---

# Boas vindas ao repositório de Back-End projeto!

Neste projeto foi desenvolvida uma API utilizando a arquitetura MSC (Model, Service, Controller) aplicando os padrões RESTful. A API trata-se de registros de tarefas individuais onde é possível fazer operações de CRUD com elas e com usuários.

Lembrando que esta aplicação corresponde aos meus esforços para melhorar minhas hard skills e soft skills, sinta-se à vontade para explorá-la! Feedbacks construtivos são sempre bem vindos!

Abaixo você poderá encontrar mais informações técnicas sobre este projeto.

---

# Sumário

- [Habilidades](#habilidades)
- [Instruções para rodar a aplicação](#instruções-para-rodar-a-aplicação)
- [Informações do projeto](#informações-do-projeto)
  - [Linter](#linter)
  - [Banco de Dados](#banco-de-dados)
    - [Collections](#collections)
  - [Desenvolvimento](#desenvolvimento)
- [Padrões e Conexões](#padrões-e-conexões)
  - [Endpoints da API](#endpoints-da-api)
  - [Mensagens de erro](#mensagens-de-erro)

---

# Habilidades

Nesse projeto, fui capaz de:

- Trabalhar com a Arquitetura MSC (Model, Service, Controller)
- Realizar queries em banco de dados não relacional com MongoDB
- Conectar a aplicação com bancos de dados não relacional
- Aplicar os padrões RESTful;

---

# Instruções para rodar a aplicação

1. Faça o fork e o clone do repositório

2. Instale as dependências do projeto
  * Instale as dependências:
    * `npm install`

3. Realize a conexão com seu banco de dados MongoDB:
  * Crie um arquivo `.env` na raíz do projeto e declare as seguintes variáveis:
    `MONGO_DB_URL`: url de conexão com seu banco
    `JWT_SECRET`: segredo que será utilizado pelo JWT
    `PORT`: porta em que o projeto irá rodar
  * Crie o banco de dados utilizando os comandos que estão no arquivo `createMongoDB.mongodb` na raíz do projeto.

4. Inicialize o projeto
  * `npm run dev`

---

# Informações do projeto

## Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento foi utilizado neste projeto o linter `ESLint`.

Você pode também instalar o plugin do `ESLint` no `VSCode`, basta ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Banco de Dados

O banco de dados utilizado é relacional e foi utilizado o MongoDB.

### Collections

O banco possui uma collection com a seguinte estrutura:

```json
{ 
  "_id": 1,
  "userName": "name",
  "userEmail": "name@name.com",
  "userRole": "admin / user",
  "userPassword": "name",
  "tasks": [
    "taskDescription": "description",
    "taskStaturs": "em andamento / pendente / pronto"
  ]
}
```

## Desenvolvimento

Neste projeto as seguintes stacks foram utilizadas no desenvolvimento:

- [Node.js](https://nodejs.org/en/docs/)

- [Express.js](https://expressjs.com/pt-br/)

- [Node MongoDB](https://www.npmjs.com/package/mongodb)

- [Joi](https://joi.dev/api/?v=17.4.2)

- [Express Rescue](https://www.npmjs.com/package/express-rescue)

- [Cors](https://www.npmjs.com/package/cors)

- [Dotenv](https://www.npmjs.com/package/dotenv)

- [Nodemon](https://www.npmjs.com/package/nodemon)

---

# Padrões e Conexões

## Endpoints da API

### URL/users

- Método GET:

Deve ser enviado no headers da requisição o seguinte:

```json
{ "authorization": "token" }
```

Em caso de sucesso o retorno da API será:

```json
{
  users: [
    { 
      "userId": 1,
      "userName": "name",
      "userRole": "admin / user",
      "userEmail": "name@name.com"
    },
    ...
  ]
}
```

- Método POST:

O endpoint deve receber a seguinte estrutura:

```json
{ 
  "userPassword": "name",
  "userName": "name",
  "userEmail": "name@name.com"
}
```

  - `userPassword` deve ser uma _string_ com no mínimo 6 caracteres;
  - `userName` deve ser uma _string_;
  - `userEmail` deve ser uma _string_ no formato de e-mail que ainda não esteja cadastrado.

O retorno da API em caso de sucesso será:

```json
{ 
  "userId": 1,
  "userName": "name",
  "userRole": "user",
  "userEmail": "name@name.com"
}
```

### URL/users/:id

- Método GET

Deve ser enviado no headers da requisição o seguinte:

```json
{ "authorization": "token" }
```

O endpoint deve receber a seguinte estrutura:

```json
{ 
  "userId": "dsdsds212154",
}
```

  - `userId` deve ser uma _string_.

O retorno da API em caso de sucesso será:

```json
{ 
  "userId": 1,
  "userName": "name",
  "userRole": "admin / user",
  "userEmail": "name@name.com"
}
```

- Método PUT

Deve ser enviado no headers da requisição o seguinte:

```json
{ "authorization": "token" }
```

O endpoint deve receber a seguinte estrutura:

```json
{ 
  "userPassword": "name",
  "userName": "name",
  "userRole": "admin / user",
  "userEmail": "name@name.com"
}
```

  - `userPassword` deve ser uma _string_ com no mínimo 6 caracteres;
  - `userName` deve ser uma _string_;
  - `userEmail` deve ser uma _string_ no formato de e-mail que ainda não esteja cadastrado.

O retorno da API em caso de sucesso será:

```json
{ 
  "userId": 1,
  "userName": "name",
  "userEmail": "name@name.com"
}
```

- Método DELETE

Deve ser enviado no headers da requisição o seguinte:

```json
{ "authorization": "token" }
```

O retorno da API em caso de sucesso será:

```json
{ 
  "userId": 1,
  "userName": "name",
  "userRole": "admin / user",
  "userEmail": "name@name.com"
}
```

### URL/users/admin

- Método POST

Deve ser enviado no headers da requisição o seguinte:

```json
{ "authorization": "token" }
```

O endpoint deve receber a seguinte estrutura:

```json
{ 
  "userPassword": "name",
  "userName": "name",
  "userEmail": "name@name.com"
}
```

  - `userPassword` deve ser uma _string_ com no mínimo 6 caracteres;
  - `userName` deve ser uma _string_;
  - `userEmail` deve ser uma _string_ no formato de e-mail que ainda não esteja cadastrado.

O retorno da API em caso de sucesso será:

```json
{ 
  "userId": 1,
  "userName": "name",
  "userEmail": "name@name.com",
  "userRole": "admin"
}
```

### URL/users/login

- Método POST

O endpoint deve receber a seguinte estrutura:

```json
{ 
  "userPassword": "name",
  "userEmail": "name@name.com"
}
```

  - `userEmail` deve ser uma _string_ e um e-mail já cadastrado;
  - `userPassword` deve ser uma _string_ e a senha respectiva.

O retorno da API em caso de sucesso será:

```json
{ 
  "token": "token"
}
```

### URL/tasks

- Método GET:

Deve ser enviado no headers da requisição o seguinte:

```json
{ "authorization": "token" }
```

Em caso de sucesso o retorno da API será:

```json
{
  tasks: [
    { 
      "userName": "name",
      "userEmail": "name@name.com",
      "taskDescription": "description",
      "taskStatus": "status"
    },
    ...
  ]
}
```

### URL/tasks/user/:id

- Método GET

Deve ser enviado no headers da requisição o seguinte:

```json
{ "authorization": "token" }
```

O retorno da API em caso de sucesso será:

```json
{ 
  "tasks": [
    {
      "taskDescription": "description",
      "taskStatus": "status"
    },
    ...
  ]
}
```

- Método PUT

Deve ser enviado no headers da requisição o seguinte:

```json
{ "authorization": "token" }
```

O endpoint deve receber a seguinte estrutura:

```json
{ 
  "tasks": [
    {
      "taskDescription": "description",
      "taskStatus": "status"
    },
    ...
  ]
}
```

  - `taskDescription` deve ser uma _string_;
  - `taskStatus` deve ser 'pendente', 'em andamento' ou 'pronto'.

O retorno da API em caso de sucesso será:

```json
{ 
  "tasks": [
    {
      "taskDescription": "description",
      "taskStatus": "status"
    },
    ...
  ]
}
```

## Mensagens de erro

Em caso de algum erro ocorrer durante alguma requisição, a API retorna o status HTTP adequado e o body no seguinte padrão:
`{ err: { message: 'Dados inválidos', code: <código do erro> } }`.

---
