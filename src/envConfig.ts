import dotenv from 'dotenv';

dotenv.config();

const envVars = {
  PORT: process.env.PORT as string | number,
};

export default envVars;
