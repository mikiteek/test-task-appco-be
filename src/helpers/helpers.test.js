const {getUsersStatisticData, getUsersData} = require("./getJsonDataHelper");
const {seedingDataHelper} = require("./seedingDataHelper");
const User = require("../users/users.model");
const Statistic = require("../statistics/statistics.model");


describe("Correct work of helpers", () => {
  beforeAll(done => {
    done()
  });
  afterAll(done => {
    done()
  });

  describe("Correct work of json data helpers", () => {
    it("should return array of objects", async () => {
      const result = await getUsersStatisticData();
      console.log("statistics count", result.length)
      expect(result).toEqual(expect.arrayContaining([expect.any(Object)]))
    });

    it("should return array of objects", async () => {
      const result = await getUsersData();
      console.log("users count", result.length)
      expect(result).toEqual(expect.arrayContaining([expect.any(Object)]))
    });
  });

  // describe("Correct work of seeding data helpers", () => {
  //   it("should return array of users", async () => {
      // const users = await getUsersData();
      // const statistics = await getUsersStatisticData();
      // const seedingDataUsers = [users[0], users[1], users[2]];
      // const seedingDataStatistics = [statistics[0], statistics[1], statistics[2]];
      // const resultUsers = await seedingDataHelper(User, seedingDataUsers);
      // const resultStatistics = await seedingDataHelper(Statistic, seedingDataStatistics);

      // expect(resultUsers).toEqual(expect.arrayContaining([expect.any(Object)]))
      // expect(resultStatistics).toEqual(expect.arrayContaining([expect.any(Object)]))
    // });
  // });
});