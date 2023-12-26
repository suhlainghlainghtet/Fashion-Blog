import bcrypt from "bcrypt";

import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { config } from "../config/config";
import { db } from "../db/db";

export const appRouter = express.Router();
appRouter.post("/signup", async (req: Request, res: Response) => {
  const { userName, userEmail, userPassword, isArchived } = req.body;
  const newUserName = userName as string;
  const newUserEmail = userEmail as string;
  const newUserPassword = userPassword as string;
  const isVaild = newUserName && newUserEmail && newUserPassword;
  if (!isVaild) return res.status(400).send("Bad request....");
  const hashedPassword = await bcrypt.hash(newUserPassword, 10);
  const query =
    "INSERT INTO users (name, email, password, is_archived) VALUES (?, ?, ?, ?)";
  db.query(query, [newUserName, newUserEmail, hashedPassword, isArchived]);

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [newUserEmail],
    (err, result: RowDataPacket[] | RowDataPacket[][] | ResultSetHeader) => {
      if (err) return res.status(500).send("Internal server error!");
      const user = (result as RowDataPacket[])[0];
      const userInfo = {
        id: user.id,
        userName: user.name,
        userEmail: user.email,
        userImage: user.image,
        isArchived: user.is_archived,
      };
      return res.status(200).send({ user: userInfo });
    }
  );
});

appRouter.post("/signin", (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userEmail = email as string;
  const userPassword = password as string;
  const isVaild = userEmail && userPassword;
  if (!isVaild) return res.status(400).send("Bad request.....");

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [userEmail],
    async (
      err,
      result: RowDataPacket[] | RowDataPacket[][] | ResultSetHeader
    ) => {
      if (err) {
        console.error("MySQL query error:", err);
        return res.status(500).send("Internal Server Error");
      } else {
        const user = (result as RowDataPacket[])[0];
        if (!user) return res.status(500).send("Server error....");
        const userPassswordfromDatabase = user.password;
        const isPasswordVaild = await bcrypt.compare(
          userPassword,
          userPassswordfromDatabase
        );

        if (isPasswordVaild) {
          const userInfo = {
            id: user.id as number,
            userName: user.name as string,
            userEmail: user.email as string,
            userImage: user.image,
            isArchived: user.is_archived as boolean,
          };
          const accessToken = jwt.sign(userInfo, config.jwtSecretKey);
          return res.send({ accessToken, user: userInfo });
        } else {
          return res.status(401).send("Unauthorized....");
        }
      }
    }
  );
});
