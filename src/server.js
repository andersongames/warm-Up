const express = require("express") //importa o express
const server = express()

//configura pasta pública
server.use(express.static("public"))

//configura template engine (nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//habilita o use do req.body
server.use(express.urlencoded({ extended: true }))

//configurar rotas da aplicação
    //home
    server.get("/", (req, res) => {
        return res.render("index.html")
    })

//liga o servidor
server.listen(3000)