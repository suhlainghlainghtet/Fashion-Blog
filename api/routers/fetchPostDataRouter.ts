import express, { Request, Response } from "express";
import checkAuth from "../auth/auth";
import { db } from "../db/db";
const postDataRouter = express.Router();
postDataRouter.get("/data", checkAuth, (req: Request, res: Response) => {
  db.query("SELECT * FROM blog_posts", (err, result) => {
    if (err) {
      console.log("Mysql err is", err);
      return res.status(500).send("Internal server err...");
    } else {
      const blogPosts = result;
      return res.send(blogPosts);
    }
  });
});
export default postDataRouter;
