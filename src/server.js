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

/*TESTE COM ROTAS
const routes = require("routes")
server.use(routes)
TESTE COM ROTAS*/

//habilita o use do req.body
server.use(express.urlencoded({ extended: true }))

//configurar rotas da aplicação
    //home
    server.get("/", (req, res) => {
        return res.render("index.html")
    })

    //create-point
    server.get("/create-point", (req, res) => {
        return res.render("create-point.html")
    })
    

    //search-results
    server.get("/search-results", (req, res) => {
        return res.render("search-results.html")
    })

//liga o servidor
server.listen(3000)