const seedingDataHelper = async (model, seedingData) => {
  const users = await model.bulkCreate(seedingData);
  return users;
}

module.exports = {
  seedingDataHelper,
};