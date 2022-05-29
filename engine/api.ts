import express,{Express} from 'express';

const app:Express = express();

app.get('/api',(req:any,res)=>{
    res.send('Hello API');
});
app.get('/api/:name',(req:any,res)=>{
    const {name} = req.params;
    res.send(`Hello ${name}`);
});


export default app;