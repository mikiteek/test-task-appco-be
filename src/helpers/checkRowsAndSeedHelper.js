const seedingDataHelper = async (model, seedingData) => {
  const data = await model.bulkCreate(seedingData);
  return data;
}

const checkRowsAndSeedHelper = async (model, getData) => {
  const data = await model.findOne();
  if (data) {
    return;
  }
  const dataToSeed = await getData();
  await seedingDataHelper(model, dataToSeed);
}

module.exports = {
  checkRowsAndSeedHelper,
}