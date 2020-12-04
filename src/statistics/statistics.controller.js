const Statistic = require("./statistics.model");
const {getUsersStatisticData} = require("../helpers/getJsonDataHelper");
const {checkRowsAndSeedHelper} = require("../helpers/checkRowsAndSeedHelper");

class StatisticsController {
  async getStatistics(req, res, next) {
    try {
      const statistic = await Statistic.findAll();
      if (!statistic.length) {
        return res.status(404).json({message: "Not found"});
      }
      return res.status(200).json({"Count of elements": statistic.length});
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new StatisticsController();