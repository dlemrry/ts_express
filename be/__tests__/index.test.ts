import app from "../index";
import request from "supertest";
import { User } from "../entity/user";
import { Request, Response } from "express";
import { testDataSource } from "../utils/data-source";
import { Article } from "../entity/article";

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

  test("article 작성", async () => {
    const res = await request(app)
      .post("/user/dlemrry/article")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${token}`)
      .type("application/json")
      .send({ title: "aa", content: "bb" });

    expect(res.body.writer).toEqual("dlemrry");
    expect(res.body.title).toEqual("aa");
  });

  test("article 가져오기", async () => {
    const res = await request(app)
      .get("/user/dlemrry/article")
      .set("Authorization", `Bearer ${token}`);

    expect(res.body[0].writer).toEqual("dlemrry");
    expect(res.body[0].title).toEqual("aa");
  });

  test("user article 전체 지우기", async () => {
    const res = await request(app)
      .delete("/user/dlemrry/article")
      .set("Authorization", `Bearer ${token}`);

    expect(res.body.affected).toBe(1);
  });
});
