const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

// extended version please read this
// https://swagger.io/docs/
// https://swagger.io/docs/specification/describing-responses/
/**
 * @swagger
 * /api/v1/players:
 *  get:
 *    description: "To get players data from database"
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: Array of players
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 * 
 *  post:
 *    description: "to post players data"
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: email
 *        in: body
 *        required: true
 *        example: icanq@hotmail.com
 *      - name: username
 *        in: body
 *        required: true
 *        example: DoomMagnet613
 *      - name: password
 *        in: body
 *        required: true
 *        example: Wokeoke123.
 */

playerRouter.get("/", PlayerController.getPlayers);
playerRouter.post("/", PlayerController.createPlayer);

/**
 * @swagger
 *  /api/v1/players/{id}:
 *    get:
 *      summary: Retrieve a single player user
 *      parameters:
 *        - in: path
 *          name: id
 *          example: 1
 *          schema:
 *            type: string
 *          required: true
 *      description: Retrieve a single player user. Can be used to populate
 *      responses:
 *        200:
 *          description: A single user
 *          content:
 *            application/json:
 *              properties:
 *                schema:
 *                  type: object
 *                  properties:
 *                      id:
 *                        type: integer
 *                        description: The Player ID
 *                        example: 1
 *                      username:
 *                        type: string
 *                        description: The Player Username 
 *                        example: DoomSlayer212
 */

playerRouter.get("/:id", PlayerController.getPlayerById);
playerRouter.put("/:id", PlayerController.updatePlayer);
playerRouter.delete("/:id", PlayerController.deletePlayer);
playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
