const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const db = require("./config/key");

//  cors middleware for interacting/communicate two port at a time
app.use(cors());

app.get("/", (req, res) => {
  res.send("server up and down ...");
});

// DB connection / config
mongoose
  .connect(db.mongodbURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connection successful...."))
  .catch(() => console.log("Internal server Error"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
