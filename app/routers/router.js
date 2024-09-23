const express = require('express');
const router = express.Router();
const controller = require('../controllers/student.controller.js');  // Ajusta la ruta según tu archivo controlador

// Ruta para crear un estudiante
router.post('/api/students/create', controller.createStudent);

module.exports = router;
