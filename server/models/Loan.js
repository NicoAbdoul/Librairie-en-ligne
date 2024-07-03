const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const User = require('./User');
const Book = require('./book');

const Loan = sequelize.define('Loan', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    utilisateur_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' }, onDelete: 'CASCADE' },
    livre_id: { type: DataTypes.INTEGER, references: { model: Book, key: 'id' }, onDelete: 'CASCADE' },
    date_emprunt: { type: DataTypes.DATE, allowNull: false },
    date_retour: { type: DataTypes.DATE }
}, {
    tableName: 'Emprunt'
});

Loan.belongsTo(User, { foreignKey: 'utilisateur_id' });
Loan.belongsTo(Book, { foreignKey: 'livre_id' });

module.exports = Loan;
