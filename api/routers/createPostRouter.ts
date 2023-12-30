import express, { Request, Response } from "express";
import { db } from "../db/db";
export const createPostRouter = express.Router();
interface BlogPost {
  userId: number;
  title: string;
  description: string;
  image: string;
  isArchived: boolean;
}
createPostRouter.post("/write", (req: Request, res: Response) => {
  const { userId, title, description, image, isArchived } =
    req.body as BlogPost;
  const isValid = userId && title && description && image;
  if (!isValid) return res.status(400).send("Bad request......");
  const query =
    "INSERT INTO blog_posts (title, description, image, user_id, is_archived) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [title, description, image, userId, isArchived],
    (err, result) => {
      if (err) return res.status(500).send("Internal server error.....");
      return res.status(200).send("Success....");
    }
  );
});
