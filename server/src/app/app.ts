import cors from 'cors';
import rootRoutes from '../routes';
import notFound from '../middleware/notFound';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from '../errorHandler/globalErrorHandler';
import morgan from 'morgan';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Server is Working Successfully!',
  });
});

// routes
app.use('/api/v1', rootRoutes);

// not found
app.all('*', notFound);

// Error handler
app.use(globalErrorHandler);

export default app;
