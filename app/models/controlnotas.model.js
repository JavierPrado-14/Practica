module.exports = (sequelize, Sequelize) => {
    const ControlNotas = sequelize.define('ControlNotas', {
      idnota: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_estudiante: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Estudiantes', 
          key: 'id_estudiante'
        }
      },
      FechadeIngresoMes: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Id_curso: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cursos',  
          key: 'idCurso'
        }
      },
      NotasTotal: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false
      },
      Estatus_Curso: {
        type: Sequelize.STRING(50),
        allowNull: false
      }
    }, {
      tableName: 'ControlNotas',
      timestamps: false
    });
  
    return ControlNotas;
  };
  