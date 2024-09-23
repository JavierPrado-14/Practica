const env = require('./env.js');  // Ajusta según tu configuración
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

// Importar modelos y agregarlos a db
db.Estudiante = require('../models/estudiante.model.js')(sequelize, Sequelize);  // Asegúrate de usar 'Estudiante'

module.exports = db;
