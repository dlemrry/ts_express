// const httpMocks = require("node-mocks-http");
// const app = require("./index");
import app from "../index";
import request from "supertest";
import { User } from "../entity/user";
import { Request, Response } from "express";

import { testDataSource } from "../utils/data-source";
// const request = require("supertest");
// const datasource = testDataSource;
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

  test("로그인", async () => {
    const res = await request(app)
      .post("/user/login")
      .set("Accept", "application/json")
      .type("application/json")
      .send({ userid: "dlemrry", pw: "1234" });

    expect(res.status).toBe(200);
    // console.log(res.headers["set-cookie"][0]);
    token = res.headers["set-cookie"][0].split("token=")[1].split(";")[0];
    // console.log(token);
    // expect(res.status).toEqual("dlemrry");
    // expect(res.body.name).toEqual("이득교");
    // expect(res.body.pw).toEqual("1234");
  });
});
