const express = require("express");
const path = require("path");
const userRouter = require("./routes/users");

const app = express();

// app.use(logger);

// app.use("/static", express.static(path.join(__dirname, "public")));
// // app.use("/static", express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));

// app.get("/", function (req, res) {
//   res.send("Hello world!");
// });

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000, function () {
  console.log("App listening on port 3000");
});
