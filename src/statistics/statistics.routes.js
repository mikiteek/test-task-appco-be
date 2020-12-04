const {Router} = require("express");

const statisticsController = require("./statistics.controller");
const {validateDateFilterParamsMiddleware} = require("./statistics.middlewares");
const statisticsRouter = Router();

statisticsRouter.get("/:user_id",
  validateDateFilterParamsMiddleware,
  statisticsController.getStatisticsByUserId,
);

module.exports = statisticsRouter;