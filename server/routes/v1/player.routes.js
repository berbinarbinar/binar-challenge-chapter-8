const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

/**
 * @swagger
 * /api/v1/players/:
 *  get:
 *      summary: Retrieve a List of Players
 *      description: Retrieve a list of players with their data
 *      responses:
 *          200:
 *              description: A list of players
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *          400:
 *              description: Bad request
 *          default:
 *              description: Unexpected Errors
 * 
 *  post:
 *      summary: Create New Player (Upload New Player's Data)
 *      description: Create new player or Upload new player's data to database
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: Crete Player
 *            description: Creating Player
 *            schema:
 *              type: object  
 *              required:  
 *                  - username  
 *                  - email  
 *                  - password  
 *                  - experience  
 *              properties:  
 *                  username:
 *                      type: string
 *                      example: godjirah
 *                  email:
 *                      type: string
 *                      example: go@mail.com
 *                  password:
 *                      type: string
 *                      example: helooooo
 *                  experience:
 *                      type: integer
 *                      example: 1000000
 *      responses:
 *          201:
 *              description: Player is created
 *          400:
 *              description: Bad Request
 *          404:
 *              description: ID/Username/email/password/experience might be empty or not valid
 *          default:
 *              description: Unexpected error
 */

playerRouter.get("/", PlayerController.getPlayers);
playerRouter.post("/", PlayerController.createPlayer);


/**
 * @swagger
 * /api/v1/players/{id}:
 *  get:
 *      summary: Retrieve Specific Player by ID
 *      description: Retrieve specific player's data using ID as parameter
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: ID of specific player
 *      responses:
 *          200:
 *              description: Show chosen player by ID
 *          400:
 *              description: Bad Request
 *          404:
 *              description: ID might be invalid
 *          default:
 *              description: Unexpected errors
 * 
 *  put:
 *      summary: Update Specific Player's Data
 *      description: Update specific player's data using ID as parameter
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: ID of specific player
 *          - in: body
 *            name: Update Player
 *            description: Updating Player's Data
 *            schema:
 *              type: object  
 *              required:  
 *                  - username  
 *                  - email  
 *                  - password  
 *                  - experience  
 *              properties:  
 *                  username:
 *                      type: string
 *                      example: bluish
 *                  email:
 *                      type: string
 *                      example: blu@mail.com
 *                  password:
 *                      type: string
 *                      example: hai_hai_hai
 *                  experience:
 *                      type: integer
 *                      example: 100000
 *      responses:
 *          200:
 *              description: Player is updated
 *          400:
 *              description: Bad Request
 *          404:
 *              description: ID/Username/email/password/experience might be empty or not valid
 *          default:
 *              description: Unexpected error
 * 
 *  delete:
 *      summary: Delete Specific Player by ID
 *      description: Delete specific player's data using ID as parameter
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: ID of specific player
 *      responses:
 *          200:
 *              description: Delete chosen player by ID
 *          400:
 *              description: Bad Request
 *          404:
 *              description: ID might be invalid
 *          default:
 *              description: Unexpected errors
 */

playerRouter.get("/:id", PlayerController.getPlayerById);
playerRouter.put("/:id", PlayerController.updatePlayer);
playerRouter.delete("/:id", PlayerController.deletePlayer);


/**
 * @swagger
 * /api/v1/players/exp/{id}:
 *  post:
 *      summary: Update Specific Player's Experience
 *      description: Update specific player's experience using ID as parameter
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *            description: ID of specific player
 *          - in: body
 *            name: Crete Player
 *            description: Creating Player
 *            schema:
 *              type: object  
 *              required:  
 *                  - experience  
 *              properties:
 *                  exp:
 *                      type: integer
 *                      example: 10000
 *      responses:
 *          201:
 *              description: Player's Experience is Updated
 *          400:
 *              description: Bad Request
 *          404:
 *              description: ID/experience might be empty or not valid
 *          default:
 *              description: Unexpected error
 * 
 */

playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
