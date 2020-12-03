const User = require("./users.model");
const Statistic = require("../statistics/statistics.model");
const {getUsersData} = require("../helpers/getJsonDataHelper");
const {checkRowsAndSeedHelper} = require("../helpers/checkRowsAndSeedHelper");
const sequilize = require("../utils/database");

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
      const users = await User.findAll({
        limit: 10,
        include: {
          model: Statistic,
          as: "statistic",
            // attributes: [
            //   [sequilize.fn("sum", sequilize.col("clicks")), "total_clicks"],
            //   [sequilize.fn("sum", sequilize.col("page_views")), "total_page_views"],
            // ],
        }
      });
      // const stats = await Statistic.findAll({
      //   limit: 10,
      //   where: {
      //     user_id: 1,
      //   },
      //   attributes: [
      //     [sequilize.fn("sum", sequilize.col("clicks")), "total_clicks"],
      //     [sequilize.fn("sum", sequilize.col("page_views")), "total_page_views"],
      //   ],
      // });

      // if (!users.length) {
      //   return res.status(404).json({message: "Not found"});
      // }
      return res.status(200).json(users);
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new UsersController();