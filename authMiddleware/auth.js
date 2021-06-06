import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


export const tokenauth = async(req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'secret',(err, decoded) => {
        if(err) return next(new Error(err));
    });
    return next();
    
  } catch (error){
    res.status(401).json({
      error: error.message
    });
  }
};

export const doctorauth = async(req,res,next) => {
  const id = req.body.doctorID
  try {
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No doctor exist with that id')
    next();
  } catch (error) {
    
  }
};

export const patientauth = async(req,res,next) => {
  const id = req.body.patientID
  try {
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No patient exist with that id')
    next();
  } catch (error) {
    
  }
};

