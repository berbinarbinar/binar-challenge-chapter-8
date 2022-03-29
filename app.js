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
  swaggerDefinition: {
    info: {
      title: "Binar Challange 8 - Player Documentations",
      description: "API documentation",
      contact :{
        name : "irfan"
      },
      server: ["http://localhost:4000"]
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
 * /api:
 *  parameters:
 *    ok
 *  get:
 *    description: Use to be entrypoint for /api
 *    responses:
 *      200:
 *        description: test
 */
app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})