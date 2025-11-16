import express from 'express';
import type { HttpError } from 'http-errors';
import logger from './config/logger.ts';

const app = express();

app.get('/', (req, res) => {
    res.send('Auth Service is running');
});

app.use(
    (
        err: HttpError,
        req: express.Request,
        res: express.Response,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: express.NextFunction,
    ) => {
        logger.error(err.message);
        const statusCode = err.statusCode || 500;

        res.status(statusCode).json({
            errors: [
                {
                    type: err.name,
                    msg: err.message,
                    path: '',
                    location: '',
                },
            ],
        });
    },
);

export default app;
