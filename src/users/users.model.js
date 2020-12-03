const {DataTypes, Model} = require("sequelize");
const sequelizePaginate = require('sequelize-paginate')
const sequelize = require("../utils/database");

class User extends Model {}

User.init({
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  gender: {
    type: DataTypes.STRING,
    validate: {
      isIn: [["Male", "Female"]]
    },
  },
  ip_address: {
    type: DataTypes.STRING,
    validate: {
      isIP: true
    },
  }
},
  {
    sequelize,
    timestamps: false,
  }
);

sequelizePaginate.paginate(User);
User.sync().then(() => console.log("User sync success"));

module.exports = User;