import  express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data';
import Product from '../models/productModel';

const productRouter = express.Router();

productRouter.get('/',expressAsyncHandler(async(req, res )=>{
  const products = await Product.find({});
  res.send(products);
}))

productRouter.get('/seed' ,
 expressAsyncHandler(async(req, res)=>{
    //await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
}));

productRouter.get('/:id', expressAsyncHandler(async(req , res)=>{
   const product = await Product.findById(req.params.id);
   if(product){
     res.send(product)
   } else {
     res.status(400).send({message:"Product Not Found"})
   }
}))
export default productRouter;