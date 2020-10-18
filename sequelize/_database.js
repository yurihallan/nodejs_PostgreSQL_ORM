const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host:'localhost',
    username:'postgres',
    password:'postgres',
    dialect:'postgres',
    port:5432,
    logging:console.log
});

module.exports = sequelize


//Test DB Connection//

async function test(){
    try {
        let result = await sequelize.authenticate()
        console.log("Sequelize realizou a conexão com o banco de dados com sucesso!");
    } catch (error) {
        console.log("Houve um erro ao conectar com o banco de dados:");
        console.log(error);
        process.exit()
    }
}
test()