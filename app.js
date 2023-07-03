const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000
const openApiJson = require('./openapi.json')
const SwaggerUI = require('swagger-ui-express')

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter)
app.use('/doc', SwaggerUI.serve, SwaggerUI.setup(openApiJson))

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})