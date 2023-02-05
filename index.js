
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
app.use (express.json({ limit: '50mb' }))


app.use('/api/v1/post', postRoutes);
app.use('/api/v1/imago', imagoRoutes);






app.get('/',async(req,res)=>{
    res.send('imago ai is runnig')
})
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log('Server started on port 5000'));
  } catch (error) {
    console.log(error);
  }
};
startServer()