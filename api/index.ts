import cors from "cors";
import express from "express";
import { appRouter } from "./routers/appRouter";
import { createPostRouter } from "./routers/createPostRouter";
import postDataRouter from "./routers/fetchPostDataRouter";
import { getUpdatedUserImageRouter } from "./routers/getUpdatedUserImageRouter";
import { userSettingsRouter } from "./routers/userSettingsRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", appRouter);
app.use("/api", postDataRouter);
app.use("/api", userSettingsRouter);
app.use("/api", getUpdatedUserImageRouter);
app.use("/api", createPostRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000......");
});
