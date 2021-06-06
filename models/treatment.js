import mongoose from 'mongoose';

const treatmentSchema = mongoose.Schema({
    appointmentID:{ type: mongoose.Types.ObjectId, ref: 'AppointmentModel' },
    treatment:String,
});

const treatmentModel = mongoose.model('TreatmentModel',treatmentSchema);
export default treatmentModel;