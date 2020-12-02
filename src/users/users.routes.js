const {Router} = require("express");

const userController = require("./users.controller");
const usersRouter = Router();

usersRouter.post("/",
  userController.createUser,
);

usersRouter.delete("/:id",
  userController.removeUser,
);

usersRouter.get("/:id",
  userController.getUserById,
);

module.exports = usersRouter;