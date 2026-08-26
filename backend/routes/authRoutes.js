import express from 'express';
import { authUser, verifyUser, registerUser } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.post('/register', registerUser);
router.get('/verify', protect, verifyUser);

export default router;
