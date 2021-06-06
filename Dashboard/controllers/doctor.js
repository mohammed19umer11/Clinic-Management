import userModel from '../../models/user.js';
import appointmentModel from '../../models/appointment.js'
import treatmentModel from '../../models/treatment.js'


export const detailedAppointments = async (req,res) => {
    const {id} = req.params;
    let response = [];
    try {
        await appointmentModel.find({doctorID:id}).then(data => {
            data.forEach(appointment => {
                userModel.findOne({_id:appointment.patientID}).then(user => {
                    treatmentModel.findOne({_id:appointment.treatment}).then(treatment => {
                        response.push({
                            appointmentID : appointment._id,
                            patient : user.email,
                            patientID : user._id,
                            treatment : treatment.treatment,
                            treatmentID : treatment._id,
                            status : appointment.status,
                            time : appointment.time
                        })
                    }).then(()=>{
                        res.status(200).json(response)
                    })
                })  
            })             
        })
    } catch (error) {
        return res.status(404).send(error.message)
    }
};


export const appointments = async(req,res) => {
    const {id} = req.params;
    try {
        return res.status(200).send(await appointmentModel.find({doctorID:id}))
    } catch (error) {
        return res.status(404).send(error.message)
    }
};