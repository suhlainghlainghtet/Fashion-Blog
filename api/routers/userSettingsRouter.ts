import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { db } from "../db/db";
export const userSettingsRouter = express.Router();

userSettingsRouter.put(
  "/settings/:userId",
  async (req: Request, res: Response) => {
    const userId = Number(req.params.userId) as number;
    const userName = req.body.userName as string;
    const userEmail = req.body.userEmail as string;
    const userPasswordFromClient = req.body.userPassword;
    const userImage = req.body.userImage;
    const isValid =
      (userName || userEmail || userPasswordFromClient || userImage) && userId;
    if (!isValid) return res.status(400).send("Bad request.....");

    if (userPasswordFromClient === undefined) {
      const query = "SELECT * FROM users WHERE id = ?";
      db.query(
        query,
        [userId],
        (
          err,
          result: RowDataPacket[] | RowDataPacket[][] | ResultSetHeader
        ) => {
          if (err) {
            console.error("MySQL query error:", err);
            return res.status(500).send("Internal Server Error");
          } else {
            const user = (result as RowDataPacket[])[0];
            const userPassswordfromDatabase = user.password;
            const query =
              "UPDATE users SET name = ?, email = ?, password = ?, image = ? WHERE id = ?";
            db.query(query, [
              userName,
              userEmail,
              userPassswordfromDatabase,
              userImage,
              userId,
            ]);
            return res.status(200).send("Success update user...");
          }
        }
      );
    } else {
      const hashedPassword = await bcrypt.hash(userPasswordFromClient, 10);
      if (!hashedPassword) return res.status(400).send("Bad request...");
      const query =
        "UPDATE users SET name = ?, email = ?, password = ?, image = ? WHERE id = ?";
      db.query(query, [userName, userEmail, hashedPassword, userImage, userId]);

      return res.status(200).send("Success update user...");
    }
  }
);

userSettingsRouter.delete(
  "/settings/:userId",
  (req: Request, res: Response) => {
    const userId = Number(req.params.userId) as number;
    const isArchived = 1;
    if (!userId) return res.status(400).send("Bad request....");
    const query = "UPDATE users SET is_archived = ? WHERE id = ? ";
    db.query(
      query,
      [isArchived, userId],
      (err, result: RowDataPacket[] | RowDataPacket[][] | ResultSetHeader) => {
        if (err) return res.status(500).send("Internal server error...");
        return res.status(200).send("Success...");
      }
    );
  }
);
