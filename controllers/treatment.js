import treatmentModel from '../models/treatment.js';
import appointmentModel from '../models/appointment.js';


export const addTreatment = async(req,res) => {
    if(req.params.id!==req.body.appointmentID) return res.status(404).json({error:'Wrong appointment ID'});
    const treatment = new treatmentModel(req.body);
    if(!await appointmentModel.findById(treatment.appointmentID)) return res.status(404).send('No appointment exist with that ID');
    if(await treatmentModel.findOne({appointmentID:req.body.appointmentID})) return res.status(404).send('Treatment already prescribed use updated treatment route');
    try {
        await treatment.save();
        await appointmentModel.findByIdAndUpdate(treatment.appointmentID,{treatment:treatment._id},{new:true});
        return res.status(201).json(treatment);
    } catch (error) {
        return res.status(409).json({
            message:error.message
        });
    }
};

export const updateTreatment = async(req,res) => {
    // if(req.params.id!==req.body.appointmentID) return res.status(404).json({error:'Wrong appointment ID'});
    // const treatment = new treatmentModel(req.body);
    // if(await treatmentModel.findOne({appointmentID:req.body.appointmentID})) return res.status(404).send('Treatment already prescribed use updated treatment route')
    // try {
    //     await treatment.save();
    //     await appointmentModel.findByIdAndUpdate(treatment.appointmentID,{treatment:treatment._id},{new:true});
    //     return res.status(201).json(treatment);
    // } catch (error) {
    //     return res.status(409).json({
    //         message:error.message
    //     });
    // }
};