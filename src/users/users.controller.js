const User = require("./users.model");

class UsersController {
  async createUser(req, res, next) {
    try {
      const {body} = req;
      const user = await User.create(body);
      return res.status(201).json(user);
    }
    catch (error) {
      next(error);
    }
  }

  async removeUser(req, res, next) {
    try {
      const {params: {id}} = req;
      const user = await User.destroy({
        force: true,
        where: {
          id,
        },

      });
      if (!user) {
        return res.status(404).json({message: "Not found"});
      }
      return res.status(200).json(user);
    }
    catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    try {
      const {params: {id}} = req;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({message: "Not found"});
      }
      return res.status(200).json(user);
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new UsersController();