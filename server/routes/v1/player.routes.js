const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

/**
 * @swagger
 * /api/v1/players:
 *  get:
 *    description: "To get players data from database"
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Array of players
 *  post:
 *      description: Create new user
 *      consumes:
 *          - application/json
 *      parameters:
 *        - in: body
 *          name: user
 *          description: The user to create
 *          schema:
 *              type: object
 *              required:
 *                - username
 *              properties:
 *                  username:
 *                      type: string
 *                      example: irfandelix
 *                  email:
 *                      type: string
 *                      example: email@email.com
 *                  password:
 *                      type: string
 *                      example: O123456.
 *      responses:
 *          201:
 *              description: User created
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
 *      description: Retrieve a single player user. Can be Populate
 *      responses:
 *        200:
 *          description: single user
 *          content:
 *            application/json
 *  put:
 *        summary: Update user details to the database by ID
 *        parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *             description: User ID 
 *        requestBody:
 *           required: true     
 *           content:
 *              application/json
 *        responses:
 *          "200":
 *             description: User was successfully updated
 *             content: 
 *                application/json
 *          "404":
 *             description: User was not found
 *  delete: 
 *        summary: Delete user by ID from DB
 *        parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *             description: User ID 
 *           required: true
 *           description: User ID
 *        responses:    
 *          "200":
 *              description: User was successfully deleted
 *              content: 
 *                  application/json
 *          "404":
 *              description: User was not found     
 */
/**
 * @swagger
 * /api/v1/players/exp/{id}:
 * post:
 *  
 */

playerRouter.get("/:id", PlayerController.getPlayerById);
playerRouter.put("/:id", PlayerController.updatePlayer);
playerRouter.delete("/:id", PlayerController.deletePlayer);
playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
