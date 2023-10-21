import express from 'express';
import db from "./database/dataBase.js";
import cors from 'cors';
import ProductRouters from './routes/ProductRoutes.js';
import { handleResponses } from './middlewares/errorHandler.js';  
import helmet from 'helmet';
import morgan from 'morgan';

// Cargar configuración desde variables de entorno o archivo de configuración
import dotenv from 'dotenv';
dotenv.config();

const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de seguridad
app.use(helmet());

// Middleware de logging
app.use(morgan('combined'));

// Configuración de CORS con opciones
const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*',  // Reemplazar '*' con tu dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.set('trust proxy', true);

app.use(handleResponses);

app.use('/products', ProductRouters);

const PORT = process.env.PORT || 8000;

// Mejor manejo de errores con logging
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log del error
    res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
