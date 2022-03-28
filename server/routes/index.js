const apiRouter = require("express").Router();
const v1 = require("./v1");

/**
 * @swagger
 * /api:
 *  get:
 *    description: Use to be the entrypoint for /api
 *    responses:
 *      200:
 *        description: test
 */

apiRouter.get("/", (req, res) => {
  res.send("test");
});

apiRouter.use("/v1", v1);

module.exports = apiRouter;
