const request = require("supertest");
const sequelize = require("../utils/database");

const Server = require("../server");
const testServer = new Server();
testServer.initServices();
const app = testServer.app;


describe("Correct users endpoint", () => {
  beforeAll(done => {
    done()
  });
  afterAll(done => {
    sequelize.close();
    done()
  });

  describe("GET /statistics", () => {
    it("should return 400", async () => {
      const response = await request(app)
        .get("/statistics/5?dateFrom=2020-dd-mm&dateTo=2020-10-20")
        .expect(400);
    });
    it("should return 400", async () => {
      const response = await request(app)
        .get("/statistics/5?dateFrom=abracadabra")
        .expect(400);
    });
    it("should return 400", async () => {
      const response = await request(app)
        .get("/statistics/5?dateFrom=2020-10-17&dateTo=2020-10-2o")
        .expect(400);
    });
    it("should return 200", async () => {
      const response = await request(app)
        .get("/statistics/5")
        .expect(200);
      expect(response.body).toEqual(expect.arrayContaining([expect.any(Object)]))
    });
    it("should return 200", async () => {
      const response = await request(app)
        .get("/statistics/5?dateFrom=2019-10-17&dateTo=2019-10-20")
        .expect(200);
      expect(response.body).toEqual(expect.arrayContaining([expect.any(Object)]))
    });
    it("should return 404", async () => {
      const response = await request(app)
        .get("/statistics/5?dateFrom=1966-10-17&dateTo=1966-10-20")
        .expect(404);
    });

  });
});