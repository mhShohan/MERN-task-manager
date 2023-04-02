import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/clientRoutes';
import generalRoute from './routes/generalRoute';
import managementRoute from './routes/managementRoute';
import salesRoute from './routes/salesRoute';

/** Configuration */
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// Routes
app.use('/client', clientRoutes);
app.use('/general', generalRoute);
app.use('/management', managementRoute);
app.use('/sales', salesRoute);

// Database Connection and server listening
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database Connection Success!');
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
    })
    .catch(err => console.log('Database Connection Failed!'));