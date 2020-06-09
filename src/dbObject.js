const Sequelize = require("sequelize");
const config = require("config");
const dbConfig = config.get("database");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "mysql",
  }
);

const getConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", err);
  }
};

exports.getConnection = getConnection;
