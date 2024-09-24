module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define('Curso', {
      idCurso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      NombreCurso: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      HorarioInicio: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      HorarioFin: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      jornada: {
        type: Sequelize.STRING(50),
        allowNull: false,
      }
    }, {
      tableName: 'Cursos',
      timestamps: false
    });
  
    return Curso;
  };
  