import express from 'express';
//cant do import {Router} from 'express'
// becuse express does not support it (cmmon.js)

import {tokenauth} from '../authMiddleware/auth.js';

const router = express.Router();
import {userAuthenticate, userLogin, userSignup} from '../controllers/user.js';


router.post('/login',userLogin);
router.post('/signup',userSignup);
router.patch('/authenticate',tokenauth,userAuthenticate);



export default router;

