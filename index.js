import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

import user_routes from './routes/user.js';
import appointment_routes from './routes/appointment.js';
import treatment_routes from './routes/treatment.js';
import dashboard_routes from './Dashboard/routes/index.js';



dotenv.config();
app.use(express.json({limit: "30mb",extended: true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


app.get('',(req,res)=>{
    res.send('Test')
});
app.use('/user',user_routes);
app.use('/appointment',appointment_routes)
app.use('/treatment',treatment_routes);
app.use('/dashboard',dashboard_routes)

const PORT = process.env.PORT || 6000;

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
