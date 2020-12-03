require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const sequelize = require("./utils/database");
const usersRouter = require("./users/users.routes");
const statisticsRouter = require("./statistics/statistics.routes");
const errorMiddleware = require("./errors/errorMiddleware");

const {checkRowsAndSeedHelper} = require("./helpers/checkRowsAndSeedHelper");
const {getUsersStatisticData, getUsersData} = require("./helpers/getJsonDataHelper");
const User = require("./users/users.model");
const Statistic = require("./statistics/statistics.model");

class Server {
  #app;
  constructor() {
    this.#app = express();
  }

  async start() {
    await this.initServices();
    this.startListening();
  }

  async initServices() {
    this.initCommonMiddleware();
    this.initRoutes();
    await this.initDataBase();
    this.initErrorMiddleware();
  }
  get app() {
    return this.#app
  }

  initCommonMiddleware() {
    this.#app.use(express.json());
    this.#app.use(morgan("combined"));
    this.#app.use(express.static("public"));
    this.#app.use(cors());
  }
  async initDataBase() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      await checkRowsAndSeedHelper(User, getUsersData);
      await checkRowsAndSeedHelper(Statistic, getUsersStatisticData);
    }
    catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
  initErrorMiddleware() {
    this.#app.use(errorMiddleware);
  }
  initRoutes() {
    this.#app.use("/users", usersRouter);
    this.#app.use("/statistics", statisticsRouter);
  }
  startListening() {
    this.#app.listen(process.env.PORT, () => {
      console.log(`Server start listening on port ${process.env.PORT}`);
    });
  }
}

module.exports = Server;