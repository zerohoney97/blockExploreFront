import supertest from "supertest";

const request = supertest("https://api.bouncexplorer.site");

describe("GET /block", () => {
  it("responds with data", async () => {
    console.log('response');

    const response = await request.get("/block");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
  });
});
