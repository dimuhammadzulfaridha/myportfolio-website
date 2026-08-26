import express from 'express';
import { createCrudControllers } from '../controllers/genericController.js';
import Certification from '../models/Certification.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
const { getItems, createItem, updateItem, deleteItem } = createCrudControllers(Certification);

router.route('/').get(getItems).post(protect, createItem);
router.route('/:id').put(protect, updateItem).delete(protect, deleteItem);

export default router;
