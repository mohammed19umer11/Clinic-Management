import mongoose from 'mongoose';

const appointmentSchema = mongoose.Schema({
    doctorID:{ type: mongoose.Types.ObjectId, ref: 'UserModel' },
    patientID:{ type: mongoose.Types.ObjectId, ref: 'UserModel' },
    time:String,
    treatment:{ type: mongoose.Types.ObjectId, ref: 'TreatmentModel', default: null },
    status:{
        type:Boolean,
        default:false
    },
    
});

const appointmentModel = mongoose.model('AppointmentModel',appointmentSchema);
export default appointmentModel;