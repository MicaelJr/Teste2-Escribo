# DESAFIO 2 - ESCRIBO

API de autenticação/criação de usuários desenvolvida em NodeJS, utilizando o framework Express.

Para otimizar o desenvolvimento, foi utilizado a biblioteca Bcryptjs para ajudar na criptografia e o padrão Json Web Token - JWT para criação de token e melhor qualidade nas validações de acesso.

A biblioteca para conexão com o banco de dados foi o Mongoose, banco utilizado MongoDB.

# Começando

Primeiro, baixe as dependências:

npm install

Depois, execute o servidor de desenvolvimento:

node src/server.js

Abra http://localhost:3000.

As rotas utilizadas são:

- /auth/register
- /auth/authenticate
- /admin/users

Obs: para realizar os testes nas rotas acima, seguindo os passos supramencionados, será necessario utilizar uma API Client (Postman/Insomnia/etc)

# Deploy
