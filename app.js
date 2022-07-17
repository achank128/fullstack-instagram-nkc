const express = require("express");
const app = express();

require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

//routers
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comments");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//upload file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/image");
  },
  filename: (req, file, cb) => {
    //cb(null, req.body.name);
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.array("file", 10), (req, res) => {
  try {
    res.status(200).json(req.files);
  } catch (error) {
    console.error(error);
  }
});

//routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);

app.use((req, res) => res.status(404).send("Route does not exist"));

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}..!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
