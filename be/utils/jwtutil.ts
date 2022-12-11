const { promisify } = require("util");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const redisClient = require("./redis");
const { get, set } = require("./redis");
const secret = process.env.JWTSECRET;

interface user {
  userid: string;
  name: string;
  pw: string;
}
const login = (user: user) => {
  // access token 발급
  const payload = {
    // access token에 들어갈 payload
    userid: user.userid,
    pw: user.pw,
    name: user.name,
  };
  const token = jwt.sign(payload, secret, {
    // secret으로 sign하여 발급하고 return
    algorithm: "HS256", // 암호화 알고리즘
    expiresIn: "1h", // 유효기간
  });

  return token;
};

const verify = (token: string) => {
  // access token 검증
  let decoded = null;
  try {
    decoded = jwt.verify(token, secret);
    return {
      ok: true,
      id: decoded.id,
      role: decoded.role,
    };
  } catch (err: any) {
    return {
      ok: false,
      message: err.message,
    };
  }
};

const refresh = () => {
  // refresh token 발급
  return jwt.sign({}, secret, {
    // refresh token은 payload 없이 발급
    algorithm: "HS256",
    expiresIn: "14d",
  });
};

// const refreshVerify = async (token: string, userId: string) => {
//   try {
//     const data = await get(userId); // refresh token 가져오기
//     if (token === data) {
//       try {
//         jwt.verify(token, secret);
//         return true;
//       } catch (err) {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
// };

module.exports = {
  login: login,
  verify: verify,
  refresh: refresh,
  // refreshVerify: refreshVerify,
};
