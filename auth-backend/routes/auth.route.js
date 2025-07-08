import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';
import protect from '../middleware/authmiddleware.js';

const router = express.Router();

router.get('/protected', protect, (req, res) => {
    res.status(200).json({ message: "Protected route accessed", user: req.user });
});


router.post('/register', registerUser);
router.post('/login', loginUser);


export default router;
