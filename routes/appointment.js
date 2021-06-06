import express from 'express';

import {tokenauth} from '../authMiddleware/auth.js';

const router = express.Router();

import {createAppointment, updateAppointment} from '../controllers/appointment.js';

router.post('/create',tokenauth,createAppointment);
router.patch('/update/:id',tokenauth,updateAppointment);



export default router;
