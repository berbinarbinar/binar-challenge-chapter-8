const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();


/**
 * @Routes "/api/v1/players"
 */


/**
 * @swagger
 * /api/v1/players:
 *  get:
 *   description: Retrieve all players data
 *   produces:
 *    - application/json
 *   responses:
 *    '200':
 *      description: All players data
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *  
 *  post:
 *   summary: create new users
 *   description: create new player
 *   parameters:
 *    - name: player
 *      in: body
 *      schema:
 *       properties:
 *        username:
 *         type: string
 *         format: string
 *         example: 'magento'
 *        email:
 *         type: string
 *         format: string
 *         example: 'magento@yahoo.com'
 *        password:
 *         type: string
 *         formar: string
 *         example: 'magento123' 
 *   responses:
 *    '200':
 *      description: players successfully created
 *    
 *
 *  
 */


playerRouter.get("/", PlayerController.getPlayers);
playerRouter.post("/", PlayerController.createPlayer);

/**
 * @swagger
 * /api/v1/players/{id}:
 *  get:
 *   summary: get single player by id
 *   parameters:
 *    - in: path
 *      name: id
 *      example: 1
 *      schema:
 *       type: string
 *      required: true
 *   description: get a single player 
 *   responses:
 *    200:
 *     description: single user
 *     content:
 *      application/json:
 *       properties:
 *        schema:
 *         type: object
 *         properties:
 *          id:
 *           type: integer
 *           description: player ID
 *           example: 1
 *          username:
 *           type: string
 *           description: player username
 *           example: magento002 
 * 
 *  put:
 *   summary: update player by id
 *   parameters:
 *    - in: path
 *      name: id
 *      example: 1
 *      schema:
 *       type: string
 *      required: true
 *    - in: body
 *      name: players
 *      schema:
 *       properties:
 *        username:
 *         type: string
 *         format: string
 *         example: 'magntTerbang'
 *        email:
 *         type: string
 *         format: string
 *         example: 'magentoterbang123@yahoo.com'
 *   responses:
 *    '200':
 *     description: player successfully updated
 *   
 *  delete:
 *   summary: delete player by id
 *   parameters:
 *    - in: path
 *      name: id
 *      example: 1
 *      schema:
 *       type: string
 *      required: true
 *   responses:
 *    '200':
 *     description: player successfully deleted
 */


playerRouter.get("/:id", PlayerController.getPlayerById);
playerRouter.put("/:id", PlayerController.updatePlayer);
playerRouter.delete("/:id", PlayerController.deletePlayer);

/**
 * @swagger
 * /api/v1/players/exp/{id}:
 *  post:
 *   summary: inserting exp of user
 *   parameters:
 *    - in: path
 *      name: id
 *      example: 1
 *      schema:
 *       type: string
 *      required: true
 *    - in: body
 *      name: exp number
 *      schema:
 *       properties:
 *        exp:
 *         type: integer
 *         format: integer
 *         example: 50000
 *   responses:
 *    '200':
 *     description: player exp updated
 */

playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
