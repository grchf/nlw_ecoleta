// coments
document.write("Hello")

// variaveis (tipos de dados)
let myvar = "Hi"
const myvar = "Hi"
document.write(myconts + myvar)

// string
"Isso é uma string"
'Isso também é uma string'
`Isso é uma string também`

// number
const n1 = 1
const n2 = 12
document.write(n1 + n2)

// boolean (true ou false)
const bTrue = true
const bFalse = false
document.write(bFalse)

// objetos possuem propriedades = funcionalidades
const pessoa = {
    altura: "1,80m",
    idade: 24,
    solteiro: true,
    correr() {
        document.write("executar uma grande lógica de correr")
    }
}
pessoa.correr()

// Array (vetores)
const colecaoDeBolinhas = ["blue", "green", 1, {name: "My Name"}]
document.write(colecaoDeBolinhas[3] .name)

// Funções (funcionalidades - atalhos - reuso de código)
    // registrar função
function sayMyName(name) {
    document.write(name)
}
    // executar a função
sayMyName("Douglas")
sayMyName("Valeska")
sayMyName("Kyam")

// Condicionais
const notaFinal = 7
if (notaFinal < 5) {
    document.write("Reprovado")
} else {
    document.write("Aprovado")
}

// Loop (repetições)
for (i = 0; i < 10; i++) {
    document.write(`<p>${i}</p>`)
}