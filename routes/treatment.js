import express from 'express';

import {tokenauth} from '../authMiddleware/auth.js';

const router = express.Router();

import {addTreatment} from '../controllers/treatment.js';

router.post('/add/:id',tokenauth,addTreatment)



export default router;
