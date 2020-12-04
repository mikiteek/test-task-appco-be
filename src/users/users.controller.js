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
      const {query: {page, paginate}} = req;
      const users = await User.paginate({
        page,
        paginate,
        include: {
          model: Statistic,
          as: "statistic",
          attributes: [
            [sequilize.fn("sum", sequilize.col("clicks")), "total_clicks"],
            [sequilize.fn("sum", sequilize.col("page_views")), "total_page_views"],
          ],
          group: ["user_id"],
          separate: true,
        },
      });
      return res.status(200).json(users);
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new UsersController();