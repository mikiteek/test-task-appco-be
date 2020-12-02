const {getUsersStatisticData, getUsersData} = require("./getJsonDataHelper");


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
      expect(result).toEqual(expect.arrayContaining([expect.any(Object)]))
    });

    it("should return array of objects", async () => {
      const result = await getUsersData();
      expect(result).toEqual(expect.arrayContaining([expect.any(Object)]))
    });

  });
});