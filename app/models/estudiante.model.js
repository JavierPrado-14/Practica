module.exports = (sequelize, Sequelize) => {
    const Estudiante = sequelize.define('Estudiante', {
      id_estudiante: {  
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre_completo: {  
        type: Sequelize.STRING,
        allowNull: false
      },
      tutor: {  
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha_nacimiento: {  
        type: Sequelize.DATE,  
      },
      ultimo_ano_aprobado: {  
        type: Sequelize.STRING, 
        allowNull: false
      },
      carnet: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      tableName: 'Estudiantes',  
      timestamps: false         
    });
  
    return Estudiante;
  };
  