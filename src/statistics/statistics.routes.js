const {Router} = require("express");

const statisticsController = require("./statistics.controller");
const statisticsRouter = Router();

statisticsRouter.get("/",
  statisticsController.getStatistics,
);

module.exports = statisticsRouter;