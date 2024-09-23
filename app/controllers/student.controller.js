const db = require('../config/db.config.js');  // Ajusta la ruta según tu estructura
const Estudiante = db.Estudiante;  // Asegúrate de usar 'Estudiante'

// Crear un nuevo estudiante
exports.createStudent = (req, res) => {
    let student = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        carnet: req.body.carnet
    };

    Estudiante.create(student).then(result => {
        res.status(200).json({
            message: "Estudiante creado exitosamente con id = " + result.id,
            student: result,
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    });
};
