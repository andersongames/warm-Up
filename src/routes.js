const express = require("express")
const routes = express()

//habilita o use do req.body
routes.use(express.urlencoded({ extended: true }))

//configurar rotas da aplicação
//home
routes.get("/", (req, res) => {
    return res.render("index.html")
})

//create-point


//search-results

module.exports = routes
