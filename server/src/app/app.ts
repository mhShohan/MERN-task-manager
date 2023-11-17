import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import rootRoutes from '../routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'Working Successfully!' });
});

// routes
app.use('/api/v1', rootRoutes);

// not found
app.all('*', (_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: '404! Route Not found.',
  });
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  res.json(err);
});

export default app;
