import mongoose from 'mongoose';

const url = "mongodb://127.0.0.1:27017/ferresmart";
const maxRetries = 5;
let attempt = 0;

const connectWithRetry = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('¡Conectado a MongoDB!');
    }).catch((error) => {
        console.error('¡Error al conectar a MongoDB!', error);
        if (attempt < maxRetries) {
            attempt += 1;
            console.log(`Reintentando conexión. Intento ${attempt} de ${maxRetries}...`);
            setTimeout(connectWithRetry, 5000);  // Espera 5 segundos antes de reintentar
        } else {
            console.error('¡Error al conectar a MongoDB! Se excedió el número máximo de reintentos.');
            process.exit(1);
        }
    });
}

try {
    connectWithRetry();
} catch (error) {
    console.error('¡Error al conectar a MongoDB!', error);
    process.exit(1);
}

export default mongoose.connection;
