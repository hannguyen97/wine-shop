import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name :{type :String , required : true , unique: true} ,
  image : {type : String , repuired : true},
  brand : {type : String , repuired : true},
  category : {type : String , repuired : true},
  price : {type : Number , repuired : true},
  countInStock : {type : Number , repuired : true},
  numReviews : {type : Number , repuired : true},
},{
  timestamps: true,
});

 const Product =mongoose.model('Product' , productSchema);

 export default Product;