const {Router} = require("express");

const usersRouter = Router();

usersRouter.get("/",
  (req, res, next) => {
  console.log("GET /users");
  return res.status(200).send();
  next()},
);

module.exports = usersRouter;