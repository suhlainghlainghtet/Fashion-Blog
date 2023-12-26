import * as dotenv from "dotenv";
dotenv.config();
interface Config {
  jwtSecretKey: string;
}
export const config: Config = {
  jwtSecretKey: process.env.JWT_SECRET_KEY || "",
};
