const playerRouter = require("./player.routes");
const v1 = require("express").Router();

v1.get("/", (_, res) => {
  res.send("from v1");
});

v1.use("/players", playerRouter);

module.exports = v1;
