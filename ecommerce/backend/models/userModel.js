import mogoose from 'mongoose';

const userSchema = new mogoose.Schema({
  name: {type:String ,require:true},
  email: {type:String ,require:true,unique: true},
  password: {type:String ,require:true},
  isAdmin: {type: Boolean , default : false, require :true}
}, {
  timestamps : true
});

const User = mogoose.model('User' , userSchema);
export default User;

