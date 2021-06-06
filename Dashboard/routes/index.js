import express from 'express';

import {tokenauth} from '../../authMiddleware/auth.js';
import doctor_routes from './doctor.js';
import patient_routes from './patient.js';

const router = express.Router();

router.use(tokenauth);
router.use('/doctor',doctor_routes);
router.use('/patient',patient_routes);



export default router;
