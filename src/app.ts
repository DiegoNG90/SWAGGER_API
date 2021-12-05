import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';
import { options } from './docs/swagger';

// Swagger
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
const specs = swaggerJSDoc(options);

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;
