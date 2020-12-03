const {seedingDataHelper} = require("./seedingDataHelper");
const {getUsersStatisticData, getUsersData} = require("./getJsonDataHelper");
const User = require("../users/users.model");
const Statistic = require("../statistics/statistics.model");

const checkRowsAndSeedHelper = async () => {
  const users = await User.findOne();
  // if (!users) {
  //   const usersData = await getUsersData();
  //   await seedingDataHelper(User, usersData);
  // }
  // const statistics = await Statistic.findOne();
  // if (!statistics) {
  //   const statisticsData = await getUsersStatisticData();
  //   await seedingDataHelper(Statistic, statisticsData);
  // }
  // return;
}

module.exports = {
  checkRowsAndSeedHelper,
}