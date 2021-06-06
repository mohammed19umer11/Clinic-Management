import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email:String,
    password:String,
    type:String,
    status:{
        type:Boolean,
        default:false
    },
    
});

const userModel = mongoose.model('UserModel',userSchema);
export default userModel;