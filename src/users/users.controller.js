const User = require("./users.model");
const Statistic = require("../statistics/statistics.model");
const {getUsersData} = require("../helpers/getJsonDataHelper");
const {checkRowsAndSeedHelper} = require("../helpers/checkRowsAndSeedHelper");

class UsersController {
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
      // const users = await User.paginate({
      //   attributes: ["id", "first_name"],
      //   include: "Statistic"
      // });
      const stats = await Statistic.findAll({limit: 10});

      // if (!users.length) {
      //   return res.status(404).json({message: "Not found"});
      // }
      return res.status(200).json(stats);
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new UsersController();