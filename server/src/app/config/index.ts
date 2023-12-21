import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.LOCAL_MONGO_URI,
  database_url_cloud: process.env.CLOUD_MONGO_URI,
  jwt_secret: process.env.JWT_SECRET,
};
