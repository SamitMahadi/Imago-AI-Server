
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';
import imagoRoutes from './routes/imagoRoutes.js';
import postRoutes from './routes/postRoutes.js';




dotenv.config();


const port = process.env.PORT || 5000;

const app = express()
app.use(cors());
app.use (express.json())


app.use('/api/v1/post', postRoutes);
app.use('/api/v1/imago', imagoRoutes);






app.get('/',async(req,res)=>{
    res.send('imago ai is runnig')
})
app.listen(port, ()=>{
   try{
    connectDB(process.env.MONGODB_URL)
     console.log(`imago ai server running on ${port}`);
   }catch{
    console.log(error);
   }
})