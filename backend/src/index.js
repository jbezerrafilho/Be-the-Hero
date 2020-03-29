const express = require('express')
const cors = require('cors')
const routes = require('./routes') // usamos o / para informar 
//que se trata de um arquivo ao invés de um pacote

const app = express()

app.use(cors())
app.use(express.json()) // o servidor entederá requisições JSON no body.
app.use(routes)


app.listen(3333)

// usando o comando: $ npx create-react-app frontend
// usamos o gerenciador de pacotes npx para criar
// executar um pacote externo sem instalar o mesmo.
// $ npm install nodemon -D => instala o nodemon como dependência
// projeto. Não  precisaremos reiniciar mais o servidor
// npm start => executa o servidor
// npm install knex --save => instala o Query Buider
// npm install sqlite3 => instala o database
// npx knex  init => incia o banco e cria um arquivo knexfile.js
//npm install cors - instala pacote de segurança
// esse módulo determina quem vai acessar o backendcors -v

// ======Funcionalidades extra ======= //
// $ npm install celebrate =. validação de dados
// $ npm install jest - Testes da aplicação
// $ 
