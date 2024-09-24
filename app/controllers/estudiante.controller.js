const db = require('../config/db.config.js');  // Importar la configuración de la base de datos
const Estudiante = db.Estudiante;              // Referencia al modelo Estudiante

// Crear un nuevo estudiante
exports.create = (req, res) => {
  // Validar la solicitud
  if (!req.body.nombre || !req.body.apellido) {
    return res.status(400).send({
      message: 'El contenido no puede estar vacío!'
    });
  }

  // Crear un estudiante
  const estudiante = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    fecha_nacimiento: req.body.fecha_nacimiento
  };

  // Guardar el estudiante en la base de datos
  Estudiante.create(estudiante)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Ocurrió un error al crear el estudiante.'
      });
    });
};

// Obtener todos los estudiantes
exports.findAll = (req, res) => {
  Estudiante.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Ocurrió un error al recuperar estudiantes.'
      });
    });
};

// Obtener un estudiante por su id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Estudiante.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró al estudiante con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error al recuperar el estudiante con id=' + id
      });
    });
};

// Actualizar un estudiante por su id
exports.update = (req, res) => {
  const id = req.params.id;

  Estudiante.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'El estudiante fue actualizado correctamente.'
        });
      } else {
        res.send({
          message: `No se pudo actualizar el estudiante con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error al actualizar el estudiante con id=' + id
      });
    });
};

// Eliminar un estudiante por su id
exports.delete = (req, res) => {
  const id = req.params.id;

  Estudiante.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'El estudiante fue eliminado correctamente.'
        });
      } else {
        res.send({
          message: `No se pudo eliminar el estudiante con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'No se pudo eliminar el estudiante con id=' + id
      });
    });
};
