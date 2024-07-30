import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from 'cors';
import routes from './routes/index';
import swaggerSpec from './swagger'; 
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 8080;
const mode = process.env.ENV_NAME as string;
const website = (process.env.SITE_URL as string).replace(/\/+$/, '');//referrring website (like elly)

//EXPRESS SETUP

const corsOptions = {
    origin: website, 
    credentials: true, 
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.get('/api/health', (req, res) => {
  res.status(200).send('Healthy');
});

app.get('/api', (req, res) => {
  res.send('API working, check out the Swagger API docs at /api/docs');
});
app.get('/auth', (req, res) => {
  res.send('AUTH working, check out the Swagger API docs at /api/docs');
});

//ROUTES SETUP
app.use('/', routes);
// Add Swagger UI middleware
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//APP LISTENING
app.listen(port, () => {
    console.log(`Listenting on port ${port}`);
    console.log(`Environment is ${mode}`);
    console.log(`Website is ${website}`);
})
