const Sequelize = require("sequelize");
const env = require("../env");
module.exports = new Sequelize("codegig", "postgres", env.pw, {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
