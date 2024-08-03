// Import express
import express from "express";
import 'dotenv/config'
const app = express();

app.get('/', (req, res)=>{
    res.send('Hey! Welcome to backend of crystal video future');
})

export default app;
