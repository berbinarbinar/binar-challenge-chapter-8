const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

/**
 * @swagger
 * /api/v1/players:
 *  get:
 *      summary: Show Player's Data
 *      description: To get player's data from database
 *      produces: 
 *          - application/json
 *      responses:
 *          200:
 *              description: Players are showed
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *          400:
 *              description: Bad Request
 *          404:
 *              description: User with specified ID is not found
 *          default:
 *              description: Unexpected error
 * 
 * 
 *  post: 
 *      summary: Create New Player (Upload New Player's Data)
 *      description: To create new player or upload new player data to database
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
 *          201:
 *              description: Player is created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *          400:
 *              description: Bad Request
 *          404:
 *              description: User with specified ID is not found
 *          default:
 *              description: Unexpected error
 */


playerRouter.get("/", PlayerController.getPlayers);
playerRouter.post("/", PlayerController.createPlayer);


/**
 * @swagger
 * /api/v1/players/{id}:
 *  get: 
 *      summary: Retrieve Chosen Player's Data by ID
 *      description: Retrieve a single player user. Can be used to populate
 *      parameters:
 *          - name: id
 *            in: path
 *            example: 1
 *            schema:
 *              type: string
 *            required: true
 *      responses:
 *          200:
 *              description: Successfully shows chosen player's data
 *              content:
 *                  application/json:
 *                      properties:
 *                           schema:
 *                              type: object
 *                              properties: 
 *                                   id: 
 *                                       type: integer
 *                                       description: Player ID
 *                                       example: 1
 *          400:
 *              description: Bad Request - The specified ID is invalid
 *          404:
 *              description: User with specified ID is not found
 *          default:
 *              description: Unexpected error
 *
 *  put:
 *       summary: Update Chosen Player's Data by ID
 *       description: Update the chosen player's data from database
 *       parameters:
 *            - name: id
 *              in: path
 *              required: true
 *              example: 1
 *              schema:
 *                  type: string
 * 
 *            - name: username
 *              in: body
 *              required: true
 *              schema:
 *                  type: integer
 *            - name: email
 *              in: body
 *              required: true
 *              schema:
 *                  type: integer
 *            - name: experience
 *              in: body
 *              required: true
 *              schema:
 *                  type: integer
 *            - name: lvl
 *              in: body
 *              required: true
 *              schema:
 *                  type: integer
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       type: object
 *                       properties:
 *                          username:
 *                              type: string
 *                          email:
 *                              type: string
 *                          experience:
 *                              type: integer
 *       responses:
 *           200:
 *              description: Successfully updating chosen player's data
 *              content:
 *                   application/json:
 *                       properties:
 *                           scheme:
 *                              type: object
 *                              properties:
 *                                  username:
 *                                      type: string
 *                                  email:
 *                                      type: string
 *                                  experience:
 *                                      type: integer
 *                                  lvl:
 *                                      type: integer
 *           400:
 *              description: Bad Request - The specified ID is invalid
 *           404:
 *              description: User with specified ID is not found
 *           default:
 *              description: Unexpected error
 */

playerRouter.get("/:id", PlayerController.getPlayerById);
playerRouter.put("/:id", PlayerController.updatePlayer);


/**
 * @swagger
 * /api/v1/players/{id}:
 *  delete:
 *      summary: Delete Chosen Player's Data by ID
 *      parameters:
 *          - name: id
 *            in: path
 *            example: 1
 *            schema: 
 *              type: string
 *            required: true
 *      description: Delete player's data from database.
 *      responses:
 *          200:
 *              description: Player is deleted
 *          400:
 *              description: Bad Request - The specified ID is invalid
 *          404:
 *              description: User with specified ID is not found
 *          default:
 *              description: Unexpected error
 */
playerRouter.delete("/:id", PlayerController.deletePlayer);

/**
 * @swagger
 * /api/v1/players/exp/{id}:
 *  post:
 *      summary: Update Chosen Player Experience by ID
 *      parametes:
 *          - name: id
 *            in: path
 *            example: 1
 *            schema:
 *              type: string
 *            required: true
 *      description: Updating chosen plyaer experience without changing others criteria
 *      responses:
 *          200:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  experience:
 *                                      type: integer
 *                                  lvl:
 *                                      type: integer
 * 
 */

playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
