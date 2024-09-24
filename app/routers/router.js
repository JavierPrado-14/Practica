let express = require('express');
let router = express.Router();

const estudianteController = require('../controllers/estudiante.controller.js');
const cursosController = require('../controllers/cursos.controller.js');
const controlNotasController = require('../controllers/controlnotas.controller.js');

// Rutas para Estudiante
router.post('/api/estudiantes/create', estudianteController.create);
router.get('/api/estudiantes/all', estudianteController.findAll);
router.get('/api/estudiantes/onebyid/:id', estudianteController.findOne);
router.put('/api/estudiantes/update/:id', estudianteController.update);
router.delete('/api/estudiantes/delete/:id', estudianteController.delete);

// Rutas para Cursos
router.post('/api/cursos/create', cursosController.create);
router.get('/api/cursos/all', cursosController.findAll);
router.get('/api/cursos/onebyid/:id', cursosController.findOne);
router.put('/api/cursos/update/:id', cursosController.update);
router.delete('/api/cursos/delete/:id', cursosController.delete);

// Rutas para Control de Notas
router.post('/api/controlnotas/create', controlNotasController.create);
router.get('/api/controlnotas/all', controlNotasController.findAll);
router.get('/api/controlnotas/onebyid/:id', controlNotasController.findOne);
router.put('/api/controlnotas/update/:id', controlNotasController.update);
router.delete('/api/controlnotas/delete/:id', controlNotasController.delete);

module.exports = router;
