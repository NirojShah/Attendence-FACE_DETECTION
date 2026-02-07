import dotenv from "dotenv";

const selectEnvironment = (env: string) => {
  let file: string;
  if (env == "dev") {
    file = "./.env.development";
  } else if (env == "production") {
    file = "./.env.production";
  } else {
    file = "./.env";
  }
  dotenv.config({
    path: file,
  });
};

export default selectEnvironment;
