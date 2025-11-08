import { config } from 'dotenv';

config();

declare const process: {
    env: Record<string, string | undefined>;
};

const { PORT, NODE_ENV } = process.env || 3000;

export const Config = {
    PORT,
    NODE_ENV: NODE_ENV || 'development',
};
