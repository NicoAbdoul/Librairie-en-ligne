const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    titre: { type: DataTypes.STRING, allowNull: false },
    auteur: { type: DataTypes.STRING, allowNull: false },
    ISBN: { type: DataTypes.STRING, allowNull: false, unique: true },
    genre: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING },
    format: { type: DataTypes.STRING, allowNull: false },
    interactif: { type: DataTypes.BOOLEAN, allowNull: false },
    date_publication: { type: DataTypes.DATE },
    note_moyenne: { type: DataTypes.FLOAT }
}, {
    tableName: 'Livre'
});

module.exports = Book;
