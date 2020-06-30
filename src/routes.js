const express = require("express")
const routes = express()
const db = require("./database/db")

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

//savepoint
routes.post("/savepoint", (req, res)  => {
    //1. CREATE TABLE
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            phone TEXT,
            email TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2. INSERT
    const query = `
        INSERT INTO places (
            name,
            image,
            phone,
            email,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?,?,?);
    `
    const values = [
        req.body.name,
        req.body.image,
        req.body.phone,
        req.body.email,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro") 
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
})

//search-results
routes.get("/search-results", (req, res) => {
    const search = req.query.search

    if(search == "") {
        return res.render("search-results.html", { total: 0 })
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            res.send("Erro ao consultar")
            return console.log(err)
        }
        const total = rows.length
        return res.render("search-results.html", {places: rows, total: total }) 
    })
})

module.exports = routes