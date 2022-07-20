const express = require('express');
const app = express();
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

mongoose.connect('mongodb://127.0.0.1:27017/express',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  
const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Sample API with ZAID AIT FRIHA',
      description: 'Passez au Full Stack avec Node.js, Express et MongoDB',
      version: '1.0.0',
    },
    components: {        
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer'
        }
      }
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ['./Routes/*.js'], // files containing annotations as above
};
const openapiSpecification = swaggerJsDoc(options);
//app.use('api-docs',)


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
	app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(openapiSpecification));
//Routes
/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.use('/api/stuff',stuffRoutes);
app.use('/api/auth',userRoutes);



module.exports = app;