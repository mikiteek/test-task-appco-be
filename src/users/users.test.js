const request = require("supertest");
const sequelize = require("../utils/database");

const Server = require("../server");
const testServer = new Server();
testServer.initServices();
const app = testServer.app;

describe("Correct work of user's endpoints", () => {
  beforeAll(done => {
    done()
  });
  afterAll(done => {
    sequelize.close();
    done()
  });

  describe("GET /users", () => {
    it("should return 200", async () => {
      const response = await request(app)
        .get("/users")
        .expect(200);
      expect(response.body).toEqual({
        docs: expect.arrayContaining([expect.any(Object)]),
        pages: expect.any(Number),
        total: expect.any(Number)
      });
    });
    it("should return 200", async () => {
      const response = await request(app)
        .get("/users?page=5&paginate=10")
        .expect(200);
      expect(response.body).toEqual({
        docs: expect.arrayContaining([expect.any(Object)]),
        pages: expect.any(Number),
        total: expect.any(Number)
      });
    });
    it("should return 404", async () => {
      const response = await request(app)
        .get("/users?page=41&paginate=25")
        .expect(404);
    });
  });
});