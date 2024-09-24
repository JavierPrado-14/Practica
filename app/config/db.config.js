const env = require('./env.js');  
const Sequelize = require('sequelize');

// Crear una instancia de Sequelize
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos 
db.Estudiante = require('../models/estudiante.model.js')(sequelize, Sequelize);  
db.Cursos = require('../models/cursos.model.js')(sequelize, Sequelize);          
db.ControlNotas = require('../models/controlnotas.model.js')(sequelize, Sequelize);  

// Sincronizar los modelos en el orden correcto
db.sequelize.sync({ force: false })  
  .then(() => {
    console.log('Modelos sincronizados correctamente.');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos:', error);
  });

module.exports = db;
