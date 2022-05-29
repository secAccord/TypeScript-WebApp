import express, { Express } from 'express';
import * as Engine from './engine/main';

const app:Express = express();

app.use(Engine.default)
app.set('view engine', 'ejs')
app.listen(3000,()=>{
    console.log('Server is running');
})
