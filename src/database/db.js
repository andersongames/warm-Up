//import sqlite
const sqlite3 = require("sqlite3").verbose()

//start database
const db = new sqlite3.Database("./src/database/database.db")

//db object export
module.exports = db

//db operations
db.serialize(() => {/*
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
        "Teste",
        "Teste",
        "Teste",
        "Teste",
        "Teste",
        "Teste",
        "Teste",
        "Teste",
        "Teste"
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)*/
/*
    //3. SEARCH
    db.all(`SELECT name FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        console.log("Resultado da pesquisa: ")
        console.log(rows)
    })*/
/*
    //4. DELETE
    for(i = 6; i < 45; i++) {
        db.run(`DELETE FROM places WHERE id = ?`, [`${i}`], function(err) {
            if(err) {
                return console.log(err)
            }
            console.log("Registro deletado com sucesso")
        })
    }*/
})
