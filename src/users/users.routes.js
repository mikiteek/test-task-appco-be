const {Router} = require("express");

const usersController = require("./users.controller");
const usersRouter = Router();

usersRouter.get("/",
  usersController.getListUsers,
);

usersRouter.get("/:id",
  usersController.getUserById,
);

module.exports = usersRouter;