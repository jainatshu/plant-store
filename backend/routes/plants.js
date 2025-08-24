const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');
const validation = require('../middleware/validation');
const { authenticate, requireAdmin } = require('../middleware/auth');

// Get all plants
router.get('/', plantController.getAllPlants);

router.get('/categories/all', plantController.getCategories);

// Get plant by ID
router.get('/:id', plantController.getPlantById);

router.post('/', authenticate, requireAdmin, validation.validatePlant, plantController.createPlant);
router.put('/:id', authenticate, requireAdmin, validation.validatePlant, plantController.updatePlant);
router.delete('/:id', authenticate, requireAdmin, plantController.deletePlant);

// Get all categories


module.exports = router;