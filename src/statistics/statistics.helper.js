const {Op} = require("sequelize");

const getFilterByDateOptions = (dateFrom, dateTo, user_id) => {
  let options = {
    where: {
      user_id,
    }
  };
  if (dateFrom && dateTo) {
    options = {
      where: {
        user_id,
        date: {
          [Op.and]: {
            [Op.gte]: dateFrom,
            [Op.lt]: dateTo
          }
        }
      },
    }
  }
  else if (dateFrom) {
    options = {
      where: {
        user_id,
        date: {
          [Op.gte]: dateFrom
        }
      },
    }
  }
  else if (dateTo) {
    options = {
      where: {
        user_id,
        date: {
          [Op.lt]: dateTo
        }
      },
    }
  }
  return options;
}

module.exports = {
  getFilterByDateOptions,
}