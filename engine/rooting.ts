import express,{Express} from 'express';

const app:Express = express();

app.get('/',(req:any,res)=> {
    res.send('Hello World');
})
app.get('/user/:name',(req:any,res)=> {
    const {name} = req.params
    res.render('../public/index',{name:name});
})

export default app;