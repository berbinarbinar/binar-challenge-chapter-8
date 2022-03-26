const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

//swagger
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Binar Academy Chapter 8 - Player Documentations",
      description: "API documentation for fulfill the challenge task in binar",
      contact: {
        name: "icanq"
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
 * @rules
 * rules penulisan swagger
 * 1. indentasi haruslah baik
 * 2. dalam satu rute, namun ada request method berbeda bisa menggunakan dalam comment@swagger. yang sama
 * 3. apabila rute berbeda misal, harus pakai parameter /api/v1/players/:id, harus menggunakan comment@swagger. yang baru
 */
/**
 * @swagger
 * /api:
 *  get:
 *    description: Use to be the entrypoint for /api
 *    responses:
 *      200:
 *        description: test
 */
/**
 * @swagger
 * /api/v1:
 *  get:
 *    description: Use to be the entrypoint for /api/v1
 *    responses:
 *      200:
 *        description: from v1
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
 *                      example: asyhp
 *                  email:
 *                      type: string
 *                      example: asyhp@gmail.com
 *                  password:
 *                      type: string
 *                      example: Okeoke123.
 *      responses:
 *          201:
 *              description: User created
 */
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


app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})