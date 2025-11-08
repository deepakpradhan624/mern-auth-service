import app from './app.ts';
import { Config } from './config/index.ts';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

startServer();
