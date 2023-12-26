import express, { Request, Response } from "express";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { db } from "../db/db";
export const getUpdatedUserImageRouter = express.Router();

// Get updatedUserImage
getUpdatedUserImageRouter.get(
  "/users/user-image/:userId",
  (req: Request, res: Response) => {
    const userId = Number(req.params.userId) as number;
    const query = "SELECT * FROM users WHERE id = ?";
    db.query(
      query,
      [userId],
      (err, result: RowDataPacket[] | RowDataPacket[][] | ResultSetHeader) => {
        if (err) return res.status(500).send("Internal server error....");
        const userData = (result as RowDataPacket[])[0];
        return res.status(200).send(userData.image);
      }
    );
  }
);
getUpdatedUserImageRouter.get(
  "/users/:userId",
  (req: Request, res: Response) => {
    const userId = Number(req.params.userId) as number;
    const query = "SELECT * FROM users WHERE id = ?";
    db.query(
      query,
      [userId],
      (err, result: RowDataPacket[] | RowDataPacket[][] | ResultSetHeader) => {
        if (err) return res.status(500).send("Internal server error....");
        const userData = (result as RowDataPacket[])[0];
        const userInfo = {
          id: userData.id,
          userName: userData.name,
          userEmail: userData.email,
          isArchived: userData.is_archived,
        };
        return res.status(200).send(userInfo);
      }
    );
  }
);
