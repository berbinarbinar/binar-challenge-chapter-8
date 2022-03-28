const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

// swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')


// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Binar Challenge Chapter 8",
      description: "API documentation",
      servers: ["http://localhost:4000"]
    }
  },
  apis: ["app.js", "./server/**/*.js"]
}
const swaggerDocs = swaggerJSDoc(swaggerOptions)

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

/**
 * @Routes /api
 * entrypoint for all API routes
 */


app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})