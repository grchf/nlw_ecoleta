const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db.js")

// configurar pasta public (para ler na raiz do projeto)
server.use(express.static("public"))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos da minha aplicação
// página inicial
// req: requisição
// res: resposta 
/*
ao fazer modificações no arquivo de servidor, é necessário reinicializar o servidor
package para reiniciar automatico: nodemon
*/
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Meu título" })
})

server.get("/create-point", (req, res) => {

    // req.query = query strings da nossa url
    console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    return res.send("ok")
})

server.get("/search", (req, res) => {

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus regristros: ")
        console.log(rows)

        const total = rows.length

        // mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    }) 
})

// ligar o servidor
server.listen(3000)