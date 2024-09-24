const db = require('../config/db.config.js');  // Importar la configuración de la base de datos
const ControlNotas = db.ControlNotas;          // Referencia al modelo ControlNotas

// Crear una nueva nota de control
exports.create = (req, res) => {
  // Validar la solicitud
  if (!req.body.id_estudiante || !req.body.FechadeIngresoMes || !req.body.Id_curso || !req.body.NotasTotal || !req.body.Estatus_Curso) {
    return res.status(400).send({
      message: 'El contenido no puede estar vacío!'
    });
  }

  // Crear una nota de control
  const controlNota = {
    id_estudiante: req.body.id_estudiante,
    FechadeIngresoMes: req.body.FechadeIngresoMes,
    Id_curso: req.body.Id_curso,
    NotasTotal: req.body.NotasTotal,
    Estatus_Curso: req.body.Estatus_Curso
  };

  // Guardar la nota de control en la base de datos
  ControlNotas.create(controlNota)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Ocurrió un error al crear la nota de control.'
      });
    });
};

// Obtener todas las notas de control
exports.findAll = (req, res) => {
  ControlNotas.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Ocurrió un error al recuperar las notas de control.'
      });
    });
};

// Obtener una nota de control por su id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ControlNotas.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró la nota de control con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error al recuperar la nota de control con id=' + id
      });
    });
};

// Actualizar una nota de control por su id
exports.update = (req, res) => {
  const id = req.params.id;

  ControlNotas.update(req.body, {
    where: { idnota: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'La nota de control fue actualizada correctamente.'
        });
      } else {
        res.send({
          message: `No se pudo actualizar la nota de control con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error al actualizar la nota de control con id=' + id
      });
    });
};

// Eliminar una nota de control por su id
exports.delete = (req, res) => {
  const id = req.params.id;

  ControlNotas.destroy({
    where: { idnota: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'La nota de control fue eliminada correctamente.'
        });
      } else {
        res.send({
          message: `No se pudo eliminar la nota de control con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'No se pudo eliminar la nota de control con id=' + id
      });
    });
};
