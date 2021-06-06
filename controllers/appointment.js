import appointmentModel from '../models/appointment.js';
import mongoose from 'mongoose';

export const createAppointment = async(req,res) => {
    const appointment = new appointmentModel(req.body);
    try {
        await appointment.save();
        return res.status(201).json(appointment);
    } catch (error) {
        return res.status(409).json({
            message:error.message
        });
    }
};

export const updateAppointment = async(req,res) => {
    // const data = req.body;
    const {id} = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No appointment exist with that id');
        const updatedAppointment = await appointmentModel.findByIdAndUpdate(id,{status:true},{new:true});
        return res.status(201).json(updatedAppointment);
    } catch (error) {
        return res.status(409).json({
            message:error.message
        });
    }
};

