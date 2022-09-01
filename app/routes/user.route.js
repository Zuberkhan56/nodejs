module.exports = (app) => {
  let router = require("express").Router();
  const user = require("../controllers/user.controller");
  const { generateAccessToken } = require("../middleware/jwt.middlerware");
  router.post("/", user.createUser);
  router.get("/:id",generateAccessToken, user.userIdBy);
  router.put("/:id", user.userUpdate);
  router.delete("/:id", user.userIdDelete);
  router.get("/", user.allUser);
  router.delete("/", user.allUserDelete);
  app.use("/api/v1/user", router);
};
