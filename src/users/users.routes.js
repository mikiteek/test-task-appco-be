const {Router} = require("express");

const userController = require("./users.controller");
const usersRouter = Router();

usersRouter.post("/",
  userController.createUser,
);

usersRouter.delete("/:id",
  userController.removeUser,
);

usersRouter.get("/",
  userController.getListUsers,
);
usersRouter.get("/seed",
  userController.seedUsers,
);

usersRouter.get("/:id",
  userController.getUserById,
);

module.exports = usersRouter;