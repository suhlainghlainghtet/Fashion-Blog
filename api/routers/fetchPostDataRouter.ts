import express, { Request, Response } from "express";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { db } from "../db/db";
const postDataRouter = express.Router();
postDataRouter.get("/:userId/data", (req: Request, res: Response) => {
  const userId = req.params.userId;
  if (!userId) return res.status(400).send("Bad request..");
  db.query(
    "SELECT * FROM blog_posts WHERE user_id = ?",
    [userId],
    (err, result: RowDataPacket[] | RowDataPacket[][] | ResultSetHeader) => {
      if (err) {
        console.log("Mysql err is", err);
        return res.status(500).send("Internal server err...");
      } else {
        const blogPosts = result;
        return res.send(blogPosts);
      }
    }
  );
});
export default postDataRouter;
