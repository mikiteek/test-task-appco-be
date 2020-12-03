const {getUsersStatisticData, getUsersData} = require("./getJsonDataHelper");
// const User = require("../users/users.model");
// const Statistic = require("../statistics/statistics.model");


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
});