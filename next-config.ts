import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
