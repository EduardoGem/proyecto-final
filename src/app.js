import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors';

import authRoutes from './routes/auth.routes.js'

import taskRoutes from './routes/tasks.routes.js'

import cursoRoutes from './routes/asigcur.routes.js'

import asignarCDRoutes from './routes/asignarcd.routes.js'

import listaesRoutes from './routes/listaes.routes.js'


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(morgan('dev'));



app.use(express.json());

app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", cursoRoutes);
app.use("/api", asignarCDRoutes);
app.use("/api", listaesRoutes);


export default app; 