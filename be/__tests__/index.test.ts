import app from "../index";
import request from "supertest";
import { User } from "../entity/user";
import { Request, Response } from "express";
import { testDataSource } from "../utils/data-source";

describe("api test", () => {
  let token: string;

  beforeAll(async () => {
    await testDataSource
      .initialize()
      .then(() => {
        console.log("sqlite db initialized");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization:", err);
      });
  });

  test("회원가입", async () => {
    const res = await request(app)
      .post("/user")
      .set("Accept", "application/json")
      .type("application/json")
      .send({ userid: "dlemrry", name: "이득교", pw: "1234" });

    expect(res.status).toBe(200);
    expect(res.body.userid).toEqual("dlemrry");
  });

  test("로그인", async () => {
    const res = await request(app)
      .post("/user/login")
      .set("Accept", "application/json")
      .type("application/json")
      .send({ userid: "dlemrry", pw: "1234" });

    expect(res.status).toBe(200);
    token = res.headers["set-cookie"][0].split("token=")[1].split(";")[0];
  });

  test("auth check", async () => {
    const res = await request(app)
      .get("/user")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
  });
});
