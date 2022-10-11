import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import loginRoutes from './routes/login.routes'

const app = express();

//SETTINGS
app.set("port",4000);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(cors());
//app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//ROUTES
app.use("/login",loginRoutes);

export default app;