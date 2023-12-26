import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader?.split(" ")[1];
  if (!accessToken) return res.status(401).send("Unauthorized!");
  try {
    jwt.verify(accessToken, config.jwtSecretKey);
    console.log("Verify is success...");
    next();
  } catch (error) {
    console.log("Verify error is ", error);
  }
};
export default checkAuth;
