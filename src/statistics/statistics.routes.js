const {Router} = require("express");

const statisticsController = require("./statistics.controller");
const statisticsRouter = Router();

statisticsRouter.get("/",
  statisticsController.getStatistics,
);

statisticsRouter.patch("/seed",
  statisticsController.seedStatistics,
);

statisticsRouter.post("/",
  statisticsController.createStatistics,
);

module.exports = statisticsRouter;