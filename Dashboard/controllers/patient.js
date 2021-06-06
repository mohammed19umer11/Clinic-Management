import userModel from '../../models/user.js';
import appointmentModel from '../../models/appointment.js'
import treatmentModel from '../../models/treatment.js'


export const appointments = async(req,res) => {
    const {id} = req.params;
    try {
        return res.status(200).send(await appointmentModel.find({patientID:id}))
    } catch (error) {
        return res.status(404).send(error.message)
    }
}; 

export const activeDoctors = async(req,res) => {
    try {
        return res.status(200).send(await userModel.find({type:'doctor'}));
    } catch (error) {
        return res.status(404).send(error.message)
    }
}