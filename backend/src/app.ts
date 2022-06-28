import express from 'express';
import { json } from 'body-parser';
import { errorHandler, NotFoundError } from './middlewares'
import { signInRouter, signUpRouter, currentUserRouter, verifyUserRouter} from './routes'

const app = express();
app.set('trust proxy', true);
app.use(json());

app.all("*", async () => {
    throw new NotFoundError();
});

app.use(signInRouter);
app.use(signUpRouter);
app.use(currentUserRouter);
app.use(verifyUserRouter);
app.use(errorHandler);

export { app }