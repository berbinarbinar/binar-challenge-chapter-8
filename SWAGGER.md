# Swagger
To use swagger, we need to install 2 packages: 
1. `swagger-ui-express`,
2. `swagger-jsdoc`

<br>

After installing the packages, we need to import them and create the swaggerOptions.
```
const swaggerOptions = {
  // To define api which we create
  swaggerDefinition: {
    info: {
      title: 'Binar Academy Chapter 8 - Player Documentation',
      description: 'API documentation to fulfill the challenge task in Binar',
      contact: {
        name: 'Alex'
      },
      servers: [`http://localhost:${PORT}`]
    }
  },
  apis: ['app.js', './server/**/*.js']
}
```

<br>

To use swaggerOptions, we need to imbued it with swagger-jsdoc.
```
const swaggerDocs = swaggerJsDocs(swaggerOptions);
```
<br>

Then to make our swagger works in our web, we need to use `app.use`.
```
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
```

<br>

After creating the swaggerOptions, we need to create the comment -- since swagger use comment as its documentation.
```
/**
 * @swagger
 *  /api:
 *  get:
 *    description: Used as entry point for /api
 *    responses: 
 *      200:
 *        description: test
 */
```

<br>

There is also some rules on creating swagger documentation:
1. Pay attention to the indentation;
2. To use different request methods in one route, we can use the same @swagger comment;
3. If the router is different, for example useing parameter, we must use differrent @swagger comment;