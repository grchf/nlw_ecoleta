const express = require("express")
const server = express()

// configurar pasta public (para ler na raiz do projeto)
server.use(express.static("public"))

// configurar caminhos da minha aplicação
// página inicial
// req: requisição
// res: resposta 
/*
ao fazer modificações no arquivo de servidor, é necessário reinicializar o servidor
package para reiniciar automatico: nodemon
*/
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

// ligar o servidor
server.listen(3000)

