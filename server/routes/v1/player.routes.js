const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

/**
 * @swagger
 * /api/v1/players:
 *  get:
 *      description: "To get players data from database"
 *      produces: 
 *          - application/json
 *      responses:
 *          200:
 *              description: Object of Players
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 * 
 * 
 *  post: 
 *      description: "To create new player or To upload new player data to database"
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: email
 *            in: body
 *            required: true
 *            example: alex@mail.com
 * 
 *          - name: username
 *            in: body
 *            required: true
 *            example: hydrean
 * 
 *          - name: password
 *            in: body
 *            required: true
 *            example: babiguling
 *      responses: 
 *          200:
 *              description: Created Player
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 */



playerRouter.get("/", PlayerController.getPlayers);
playerRouter.post("/", PlayerController.createPlayer);


/**
 * @swagger
 * /api/v1/players/{id}:
 *  get: 
 *      summary: Retrieve a single player
 *      parameters:
 *          - name: id
 *            in: path
 *            example: 1
 *            schema:
 *              type: string
 *            required: true
 *      description: Retrieve a single player user. Can be used to populate
 *      responses:
 *          200:
 *              description: Single User
 *              content:
 *                  application/json:
 *                      properties:
*                           schema:
*                               type: object
*                               properties: 
*                                   id: 
*                                       type: integer
*                                       description: Player ID
*                                       example: 1
*/

playerRouter.get("/:id", PlayerController.getPlayerById);
playerRouter.put("/:id", PlayerController.updatePlayer);
playerRouter.delete("/:id", PlayerController.deletePlayer);

playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
