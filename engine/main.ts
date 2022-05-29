import express,{Express} from 'express';
import * as Api from './api';
import * as Rooting from './rooting';
const app:Express = express();

app.use(Api.default);
app.use(Rooting.default)

export default app;