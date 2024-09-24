const db = require('../config/db.config.js');  
const Curso = db.Cursos;                     

// Crear un nuevo curso
exports.create = (req, res) => {
  // Validar la solicitud
  if (!req.body.NombreCurso || !req.body.HorarioInicio || !req.body.HorarioFin || !req.body.jornada) {
    return res.status(400).send({
      message: 'El contenido no puede estar vacío!'
    });
  }

  // Crear un curso
  const curso = {
    NombreCurso: req.body.NombreCurso,
    HorarioInicio: req.body.HorarioInicio,
    HorarioFin: req.body.HorarioFin,
    jornada: req.body.jornada
  };

  // Guardar el curso en la base de datos
  Curso.create(curso)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Ocurrió un error al crear el curso.'
      });
    });
};

// Obtener todos los cursos
exports.findAll = (req, res) => {
  Curso.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Ocurrió un error al recuperar los cursos.'
      });
    });
};

// Obtener un curso por su id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Curso.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró el curso con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error al recuperar el curso con id=' + id
      });
    });
};

// Actualizar un curso por su id
exports.update = (req, res) => {
  const id = req.params.id;

  Curso.update(req.body, {
    where: { idCurso: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'El curso fue actualizado correctamente.'
        });
      } else {
        res.send({
          message: `No se pudo actualizar el curso con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error al actualizar el curso con id=' + id
      });
    });
};

// Eliminar un curso por su id
exports.delete = (req, res) => {
  const id = req.params.id;

  Curso.destroy({
    where: { idCurso: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'El curso fue eliminado correctamente.'
        });
      } else {
        res.send({
          message: `No se pudo eliminar el curso con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'No se pudo eliminar el curso con id=' + id
      });
    });
};
