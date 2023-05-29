import express from 'express';
import croutes from "./routes/vagasroutes.js"
import cors from 'cors'

const app = express();
app.use(cors())
app.use(croutes)
app.use(express.json())

app.listen(8081, ()=>{
    console.log("Servidor na porta 8081");
});