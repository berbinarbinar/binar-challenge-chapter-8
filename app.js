const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

// swagger
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

const swaggerOptions = {
  //untuk mendefinisikan API yang kita buat
  swaggerDefinition:{
    info: {
      title: "Chapter 8 - JePra",
      description: "This is the API Documentation of Chapter 8 on Binar Academy to CRUD (Create, Read, Update and Delete) Players",
      contact: {
        name: "JePra"
      },
      servers: ["http://localhost:4000"]
    }
  },
  apis: ["app.js", "./server/**/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/**
 * @Routes /api
 * entrypoint for all API routes
 */

/**
 * @swagger
 * /api/v1/players/:
 *  post:
 *    tags:
 *      - Players API 
 *    summary: This is the Create API to create a Player
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Create Player
 *        description: This is the Create API to create a Player
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - email
 *            - password
 *          properties:
 *            username:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            experience:
 *              type: integer
 *    responses:
 *      201:
 *        description: The Player Has Been Created!
 */

/**
 * @swagger 
 * /api/v1/players/:
 *  get:
 *    tags:
 *       - Players API 
 *    summary: This is the Read API to Get the lists of Players
 *    description: This is the Read API to Get the lists of Players
 *    responses:
 *      200:
 *        description: Show All Players
 */

/**
 * @swagger
 * /api/v1/players/{id}:
 *   get:
 *     tags:
 *       - Players API 
 *     summary: This is the Read API to Get the list of Player by ID
 *     description: This is the Read API to Get the list of Player by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: This is the User ID
 *     responses:
 *       200:
 *         description: Show The Player by ID
 */

/**
 * @swagger
 * /api/v1/players/{id}:
 *   put:
 *     tags:
 *       - Players API 
 *     summary: This is the Update API to Update the Player Data using Put
 *     description: This is the Update API to Update the Player Data using Put
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: This is the User ID
 *       - in: body
 *         name: Update Player
 *         description: This is the Update API to Update the Player Data using Put
 *         schema:
 *          type: object
 *          required: 
 *            - username
 *            - email
 *            - password
 *          properties:
 *            username:
 *              type: string
 *            email:
 *              type: string
 *            password: 
 *              type: string
 *     responses:
 *       200:
 *         description: Update The Player by ID
 */

/**
 * @swagger
 * /api/v1/players/exp/{id}:
 *   post:
 *     tags:
 *       - Players API 
 *     summary: This is the Update API to Update the Player Data using Post
 *     description: This is the Update API to Update the Player Data using Post
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: This is the User ID
 *       - in: body
 *         name: Update Player
 *         description: This is the Update API to Update the Player Data using Put
 *         schema:
 *          type: object
 *          required: 
 *            - exp
 *          properties:
 *            exp:
 *              type: integer
 *     responses:
 *       200:
 *         description: Update The Player Exp by ID
 */

/**
 * @swagger
 * /api/v1/players/{id}:
 *   delete:
 *     tags:
 *       - Players API 
 *     summary: This is the Delete API to Delete the Player by ID
 *     description: This is the Delete API to Delete the Player by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: This is the User ID
 *     responses:
 *       200:
 *         description: Delete The Player by ID
 */

app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})