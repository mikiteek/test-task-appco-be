const User = require("./users.model");
const {getUsersData} = require("../helpers/getJsonDataHelper");
const {checkRowsAndSeedHelper} = require("../helpers/checkRowsAndSeedHelper");

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
  async seedUsers(req, res, next) {
    try {
      // await checkRowsAndSeedHelper(User, getUsersData);
      return res.status(201).send();
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

  async getListUsers(req, res, next) {
    try {
      const users = await User.findAll();
      if (!users.length) {
        return res.status(404).json({message: "Not found"});
      }
      return res.status(200).json({"Count of elements": users.length});
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new UsersController();