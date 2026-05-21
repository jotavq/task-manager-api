# Sistema de Postagens

Projeto CRUD desenvolvido com Node.js, Express, Sequelize e MySQL.

## Funcionalidades

- Criar postagens
- Listar postagens
- Editar postagens
- Excluir postagens

## Rotas

| GET | `/` | Lista todas as postagens |
| GET | `/cadastro` | Exibe o formulário para criar uma nova postagem |
| POST | `/add` | Cria uma nova postagem |
| GET | `/editar/:id` | Exibe o formulário de edição da postagem |
| POST | `/editar/:id` | Salva as alterações da postagem |
| POST | `/deletar/:id` | Remove uma postagem |


## Tecnologias

- Node.js
- Express
- Sequelize
- MySQL
- Handlebars

## Como executar

1. Clone o repositório e instale as dependências:

   npm install

2. Copie o arquivo de exemplo e preencha com seus dados locais:

   cp .env.example .env

3. Crie o banco no MySQL (ex: postapp) e garanta que a tabela exista (o Sequelize cria na primeira execução, se necessário).

4. Inicie o servidor:  

   npm run dev

5. Acesse: http://localhost:3001

## Sistema funcionando

![demo](./screenshots/crud.gif)