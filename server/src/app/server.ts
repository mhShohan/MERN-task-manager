import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function connect() {
  try {
    await mongoose.connect(config.database_url_cloud as string);

    console.log('Database Connected!');

    app.listen(config.port, () => {
      console.log(`Server is listening on port:${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

connect();
