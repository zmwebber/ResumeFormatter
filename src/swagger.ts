import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Container-Bros API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:8080', // Replace with your server URL
        description: 'Local development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to your API routes
};

const specs = swaggerJsdoc(options);

export default specs;

