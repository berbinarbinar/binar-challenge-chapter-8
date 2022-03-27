const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

playerRouter.get("/", PlayerController.getPlayers);
playerRouter.post("/", PlayerController.createPlayer);
playerRouter.get("/:id", PlayerController.getPlayerById);
playerRouter.put("/:id", PlayerController.updatePlayer);
playerRouter.delete("/:id", PlayerController.deletePlayer);
playerRouter.post("/exp/:id", PlayerController.updateExperience);


/**
 * @swagger
 * components:
 *  schemas:
 *    Player:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: id of player
 *        username:
 *          type: string
 *          description: username of player
 *        email:
 *          type: string
 *          description: email of player
 *        password:
 *          type: string
 *          description: password of player
 *        experience:
 *          type: integer
 *          description: experience of player
 *        lvl:
 *          type: integer
 *          description: level of player
 *        createdAt:
 *          type: string
 *          description: player creation date
 *        updatedAt:
 *          type: string
 *          description: last modified date
 * 
 *  response:
 *    DataPlayer:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: 
 *              result:
 *                type: string
 *                example: Success
 *                description: result of fetch
 *              data:
 *                type: array
 *                description: array of object player data
 *                items:
 *                  $ref: '#/components/schemas/Player'
 *    Success:
 *      description: OK
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: 
 *              result:
 *                type: string
 *                description: result of fetch
 *                example: Success
 *              message:
 *                type: string
 *                description: message of failed
 *    Failed:
 *      description: Bad Request
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties: 
 *              result:
 *                type: string
 *                description: result of fetch
 *                example: Failed
 *              message:
 *                type: string
 *                description: message of failed
 * 
 *  request:
 *    Account:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                description: username of player
 *              email:
 *                type: string
 *                description: email of player
 *              password:
 *                type: string
 *                description: password of player
 *            required:
 *              - username
 *              - email
 *              - password
 *          examples:
 *            player:
 *              summary: example value body
 *              value: 
 *                username: anakBaik2
 *                email: budiman1@gmail.com
 *                password: test1
 *    Exp:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              exp:
 *                type: integer
 *                description: exp earned by player
 *            required:
 *              - exp
 *          examples:
 *            exp:
 *              summary: example add exp player
 *              value:
 *                exp: 10000
 * 
 * 
 * paths:
 *  /api/v1/players:
 *    get:
 *      summary: Finds players
 *      description: >
 *        Find all player if query is empty Or
 *        Filter player by query if query is exist
 *      tags:
 *        - players
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: query
 *          name: username
 *          schema:
 *            type: string
 *            example: stillDreaming21
 *          description: the username of player
 *        - in: query
 *          name: email
 *          schema:
 *            type: string
 *          description: the email of players
 *        - in: query
 *          name: experience
 *          schema:
 *            type: integer
 *          description: the experience of players
 *        - in: query
 *          name: lvl
 *          schema:
 *            type: integer
 *          description: the level of players
 *      responses:
 *        '200':
 *          $ref: '#/components/response/DataPlayer'
 *    post:
 *      summary: Create player
 *      tags:
 *        - players
 *      procudes:
 *        - application/json
 *      requestBody:
 *        $ref: '#/components/request/Account'
 *      responses:
 *        '201':
 *          $ref: '#/components/response/DataPlayer'
 *        '400':
 *          $ref: '#/components/response/Failed'
 * 
 *  /api/v1/players/{id}:
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the player id
 *        required: true
 *        schema:
 *          type: integer
 *          example: 1                   
 *    get:
 *      summary: get a player by id
 *      tags:
 *        - players
 *      procudes:
 *        - application/json
 *      responses:      
 *        '200':                
 *          $ref: '#/components/response/DataPlayer' 
 *        '404':
 *          $ref: '#/components/response/Failed'   
 *    put:
 *      summary: update account player  
 *      tags:       
 *        - players            
 *      procudes:
 *        - application/json
 *      requestBody:
 *        $ref: '#/components/request/Account'
 *      responses:
 *        '200':
 *          $ref: '#/components/response/Success'
 *        '400':
 *          $ref: '#/components/response/Failed'
 *        '404':
 *          description: Player Not Found
 *          $ref: '#/components/response/Failed'
 *    delete:
 *      summary: delete player
 *      tags:
 *        - players
 *      procudes:
 *        - application/json
 *      responses:
 *        '200':
 *          $ref: '#/components/response/Success'
 *        '400':
 *          $ref: '#/components/response/Failed'
 *  
 *  /api/v1/players/exp/{id}:
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the player id
 *        required: true
 *        schema:
 *          type: integer
 *          example: 1
 *    post:
 *      summary: update experience player
 *      tags: 
 *        - players
 *      procudes:
 *        - application/json
 *      requestBody:
 *        $ref: '#/components/request/Exp'
 *      responses:
 *        '200':
 *          $ref: '#/components/response/Success'
 *        '400':
 *          $ref: '#/components/response/Failed'
 *        '404':
 *          $ref: '#/components/response/Failed'    
 */
module.exports = playerRouter;
