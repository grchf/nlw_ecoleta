const express = require("express")
const server = express()

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
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

// ligar o servidor
server.listen(3000)

