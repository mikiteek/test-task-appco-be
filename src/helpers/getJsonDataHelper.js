const fs = require("fs");
const {promises: fsPromises} = fs;
const path = require("path");

const usersPath = path.join(__dirname, "../db/users.json");
const usersStatisticPath = path.join(__dirname, "../db/users_statistic.json");

const getJsonData = async (dataPath) => {
  try {
    const data = JSON.parse(await fsPromises.readFile(dataPath, "utf-8"));
    return data;
  }
  catch (error) {
    console.log(error.message);
  }
}

const getUsersData = async () => {
  return await getJsonData(usersPath);
}

const getUsersStatisticData = async () => {
  return await getJsonData(usersStatisticPath);
}

module.exports = {
  getUsersData,
  getUsersStatisticData,
}