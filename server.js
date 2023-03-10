import express  from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from "./dbCards.js"
import dotenv from 'dotenv'

// App Config
const app = express();
const port = process.env.PORT || 8001


// Middlewares
dotenv.config();
app.use(express.json());
app.use(Cors());

// DB Config
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// API Endpoints
app.get("/",(req,res) => res.status(200).send('Hello'));

app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard,(err,data) =>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=> {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));