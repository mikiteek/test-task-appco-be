const {Router} = require("express");

const usersController = require("./users.controller");
const {checkPaginateParamsMiddleware} = require("./users.middlewares");
const usersRouter = Router();

usersRouter.get("/",
  checkPaginateParamsMiddleware,
  usersController.getListUsers,
);

usersRouter.get("/:id",
  usersController.getUserById,
);

module.exports = usersRouter;