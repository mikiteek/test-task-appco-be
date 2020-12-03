const Statistics = require("./statistics.model");


describe("Correct users endpoint", () => {
  beforeAll(done => {
    done()
  });
  afterAll(done => {
    done()
  });

  describe("Correct work of seeding data helpers", () => {
    it("should return array of users", async () => {
      const statistics = await Statistics.findAll();

      expect(statistics).toEqual(expect.arrayContaining([expect.any(Object)]))
    });
  });
});