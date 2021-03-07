import express from 'express';
import mongoose  from 'mongoose';
import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}))
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex : true,
});

app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.use((err, req , res , next)=>{
  res.status(500).send({message:err.message});
})

app.listen(5000, ()=>{console.log('Server started at http://localhost:5000')});
