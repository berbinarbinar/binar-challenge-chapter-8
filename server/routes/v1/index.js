const playerRouter = require("./player.routes");
const v1 = require("express").Router();

/**
 * @swagger
 * /api/v1:
 *  get:
 *    description: Use to be the entrypoint for /api/v1
 *    responses:
 *      200:
 *        description: from v1
 */

v1.get("/", (_, res) => {
  res.send("from v1");
});

v1.use("/players", playerRouter);

module.exports = v1;
