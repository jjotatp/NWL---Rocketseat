const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")

//configurar pasta pública
server.use(express.static("public"))

//habilitar o uso do req.bory na aplicação
server.use(express.urlencoded({ extended: true}))

//ultilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCach: true
})

//Configurar caminho da minha aplicação
//página inicial
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Seu Marketplace de coleta de resíduos" })
})

//página create-point
server.get("/create-point", (req, res) => {
    // req.query: Query Strings da nossa url
    console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    //req.bory: O corpo do nosso formulário
    // console.log(req.body)

    /////INCERIR DADOS NA TABELA
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com Sucesso!")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData)

})

//página search
server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("search-results.html", { total: 0})
    }

    //Pegar dados da tabela
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
    if(err){
            return console.log(err)
        }

        const total = rows.length 
    
        // console.log("Aqui estão os seus registros: ")
        // console.log(rows)
        //Mostras as páginas html com os dados do bando de dados
        return res.render("search-results.html", {places: rows, total})
    })
})

//Ligar o servidor
server.listen(3000)