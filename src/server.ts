import app from './app.ts';
import { Config } from './config/index.ts';
import logger from './config/logger.ts';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            logger.error('Error starting server:', error);

            setTimeout(() => {
                process.exit(1);
            }, 1000); // Retry after 1 seconds
        }
    }
};

startServer();
