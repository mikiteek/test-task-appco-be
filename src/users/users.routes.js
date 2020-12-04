const {Router} = require("express");

const usersController = require("./users.controller");
const {checkPaginateParamsMiddleware} = require("./users.middlewares");
const usersRouter = Router();

usersRouter.get("/",
  checkPaginateParamsMiddleware,
  usersController.getListUsers,
);

module.exports = usersRouter;