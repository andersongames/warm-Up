const express = require("express")
const routes = express()

//habilita o use do req.body
routes.use(express.urlencoded({ extended: true }))

//configura template engine (nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: routes,
    noCache: true
})

//configurar rotas da aplicação
//home
routes.get("/", (req, res) => {
    return res.render("index.html")
})

//create-point
routes.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

//search-results
routes.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

module.exports = routes