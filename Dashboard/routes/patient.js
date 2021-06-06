import express from 'express';


const router = express.Router();

import {activeDoctors, appointments} from '../controllers/patient.js';

router.get('/activedoctors',activeDoctors);
router.get('/appointments/:id',appointments);





export default router;
