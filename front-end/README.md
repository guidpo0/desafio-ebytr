### Informações Gerais

Projeto desenvolvido para processo seletivo da Ebytr.

---

# Boas vindas ao repositório de Front-End do projeto!

Essa aplicação permite ao usuário fazer anotações de tarefas e acompanhá-las alterando seus status.

Lembrando que esta aplicação corresponde aos meus esforços para melhorar minhas hard skills e soft skills sinta-se à vontade para explorá-la! Feedbacks construtivos são sempre bem vindos!

Abaixo você poderá encontrar mais informações técnicas sobre este projeto.

---

# Sumário

- [Habilidades](#habilidades)
- [Instruções para rodar o projeto localmente](#instruções-para-rodar-o-projeto-localmente)
- [Informações do projeto](#informações-do-projeto)
  - [ESLint](#eslint)
  - [API](#api)
  - [Stacks](#stacks)
  - [Rotas](#rotas)
  - [Local Storage](#local-storage)

---

# Habilidades

Nesse projeto, fui capaz de:

  - Utilizar React para componentizar a aplicação
  - Construir uma SPA com rotas definidas
  - Utilizar o Context API para gerenciamento de estado

---

# Instruções para rodar o projeto localmente

1. Faça o fork e o clone do repositório

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicie o projeto:
    * `npm start`

---

# Informações do projeto

## ESLint

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento foi utilizado neste projeto o linter `ESLint`.

## API

Para acessar os dados necessários foi utilizada uma API construída para este projeto. [Documentação da API](https://github.com/guidpo0/desafio-ebytr/tree/main/back-end).

## Stacks

Neste projeto foi utilizado React, HTML, CSS e TypeScript.

## Rotas

As rotas utilizadas na aplicação são as seguintes:

* Página de Login: `/`;
* Criar usuário: `/registro`;
* Minhas tarefas (deve estar logado): `/minhas-tarefas`;

## Local Storage

O uso de `localStorage` é necessário para realizar a validação do usuário logado.

O valor `token` é salvo no `localStorage` do navegador após o login.

---
