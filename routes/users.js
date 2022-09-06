const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User  List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Updated User ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Deleted User ${req.params.id}`);
  });

// router.get("/:id", (req, res) => {
//   res.send(`Get User ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`Updated User ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`Deleted User ${req.params.id}`);
// });

const users = [
  { name: "dami" },
  { name: "Mikun" },
  { name: "Sally" },
  { name: "Elie" },
];

router.param("id", (req, res, next, id) => {
  //   console.log(id);
  req.user = users[id];
  next();
});

module.exports = router;
