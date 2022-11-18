import * as dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import tasksRoutes from './routes/tasks.js';
import { urlencoded } from 'express';

const app = express();
const port = process.env.PORT || 3000;
app.use(json());
app.use(cors());
app.use('/tasks', tasksRoutes);
app.use(urlencoded({ extended: true }));

async function start() {
  try {
    await connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    app.listen(port, () => {
      console.log(`server is running on ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
