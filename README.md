# DESAFIO 2 - ESCRIBO

API de autenticação/criação de usuários desenvolvida em NodeJS, utilizando o framework Express.

Para otimizar o desenvolvimento, foi utilizado a biblioteca Bcryptjs para ajudar na criptografia e o padrão Json Web Token - JWT para criação de token e melhor qualidade nas validações de acesso.

A biblioteca para conexão com o banco de dados foi o Mongoose, banco utilizado MongoDB.

# Começando

Dependências:

npm install

Executar o servidor de desenvolvimento:

npm start

Abra http://localhost:3000 (verificar se não esta em uso localmente por outro projeto)

As rotas utilizadas são:

- /auth/register
- /auth/authenticate
- /admin/users

# Deploy

Utilizado a plataforma Render (https://render.com/) para realizar o deploy e colocar o servidor no ar.

URL: https://teste2-escribo.onrender.com(utilizar as rotas acima)

Teste realizado no Postman, após deploy. 🎉🎊✨

![image](https://github.com/MicaelJr/Teste2-Escribo/assets/43708135/ee4fc238-1303-4d34-8ae7-ae765e66601e)


# Obs: para realizar os testes nas rotas acima, seguindo os passos supramencionados, será necessario utilizar uma API Client (Postman/Insomnia/etc).
