import userModel from '../models/user.js';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';


export const userLogin = async (req,res)=>{
    const loginData = req.body;
    // const token = req.h
    try {
        const user = await userModel.findOne({email : loginData.email});
        if(user.email===loginData.email && user.password===loginData.password){
            if(!user.status) return res.status(404).json({error:'Authenticate your email'});
            const token = jwt.sign({user}, 'secret', { expiresIn: '24h' });
            return res.status(200).json({
                token,
                email : user.email,
                type : user.type
            }); 
        }
        else return res.status(404).json({error : 'Incorrect email or password'});
    } catch (error) {
        return res.status(404).json({
            message:error.message
        });
    }
};


export const userSignup = async (req,res)=>{
    const user = new userModel(req.body);
    try{
        console.log(user);
        const token = jwt.sign({user}, 'secret', { expiresIn: '24h' });
        console.log(token);
        const find = await userModel.findOne({email : user.email});
        
        if(find){
            if(!find.status){
                await sendEmail(token,user)
                return res.status(200).send('Email sent');
            }
            return res.status(404).json({message : 'Email already registered!! Try Login'});
        }
        
        await user.save();
        await sendEmail(token,user);
        return res.status(200).send('Email sent');

        
    } catch (error) {
        return res.status(409).json(error.message);
    }
};

export const userAuthenticate = async (req,res)=>{
    const email = req.body.email;
    try {
        const updatedUser = await userModel.findOneAndUpdate({email : email},{status : true},{new : true});
        res.status(200).json({
            id : updatedUser._id,
            email : updatedUser.email,
            type : updatedUser.type 
        });

    } catch (error) {
        return res.status(404).json({
            message:error.message
        });
    }
};







const sendEmail = async (token,user) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'arhumhassan666',
          pass: 'nooneelse33'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
                
    await transporter.sendMail({
        from: 'arhumhassan666@gmail.com',
        to: user.email,
        subject: 'Authenticate Your Account',
        text: `Token : ${token}\n\n ${user.email}` 
    }, (error) => {
        if (error) return error
        
    });
}