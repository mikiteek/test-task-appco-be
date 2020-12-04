const Statistic = require("./statistics.model");
const {getFilterByDateOptions} = require("./statistics.helper");

class StatisticsController {
  async getStatisticsByUserId(req, res, next) {
    try {
      const {params: {user_id}, query: {dateFrom, dateTo}} = req;
      const options = getFilterByDateOptions(dateFrom, dateTo, user_id);
      const statistic = await Statistic.findAll(options);
      if (!statistic.length) {
        return res.status(404).json({message: "Not found"});
      }
      return res.status(200).json(statistic);
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new StatisticsController();