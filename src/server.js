const express = require("express") //importa o express
const server = express()
const routes = require("./routes") //importa as rotas

//configura pasta pública
server.use(express.static("public"))

//rotas
server.use(routes)

//liga o servidor
server.listen(3000)