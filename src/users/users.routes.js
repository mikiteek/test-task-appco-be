const {Router} = require("express");

const usersController = require("./users.controller");
const usersRouter = Router();

usersRouter.post("/",
  usersController.createUser,
);

usersRouter.delete("/:id",
  usersController.removeUser,
);

usersRouter.get("/",
  usersController.getListUsers,
);

usersRouter.patch("/seed",
  usersController.seedUsers,
);

usersRouter.get("/:id",
  usersController.getUserById,
);

module.exports = usersRouter;