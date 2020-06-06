//importar dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//crir o objeto e canco de dados que ira fazer operações no banco dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//ultilizar o objeto de baco de dados para nossas operações
db.serialize(() => {
//     //criar tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

///////INCERIR DADOS NA TABELA
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "https://images.unsplash.com/photo-1579756423478-02bc82a97679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduas Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com Sucesso!")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)
    

///////CONSULTAR DADOS NA TABELA
        // db.all(`SELECT * FROM places`, function(err, rows) {
        //     if(err){
        //             return console.log(err)
        //         }
            
        //         console.log("Aqui estão os seus registros: ")
        //         console.log(rows)
        //     })
        

///////DELETAR DADOS DA TABELA
        // db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
        //     if(err){
        //         return console.log(err)
        //     }

        //     console.log("Registro deletado com sucesso!")
        // })
})