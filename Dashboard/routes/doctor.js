import express from 'express';


const router = express.Router();

import {detailedAppointments, appointments} from '../controllers/doctor.js';


router.get('/appointments_details/:id',detailedAppointments);
router.get('/appointments/:id',appointments);




export default router;
