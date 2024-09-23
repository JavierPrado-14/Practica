module.exports = (sequelize, Sequelize) => {
    const Estudiante = sequelize.define('estudiante', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false
        },
        carnet: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    });

    return Estudiante;
};
