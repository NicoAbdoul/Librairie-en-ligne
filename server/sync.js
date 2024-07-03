const sequelize = require('./db/db');
const User = require('./models/User');
const Book = require('./models/book');
const Loan = require('./models/Loan');/*
const Review = require('./models/Review');
const Recommendation = require('./models/Recommendation');
const Event = require('./models/Event');*/

sequelize.sync({ force: true }).then(() => {
    console.log('Tables have been synced!');
}).catch(err => {
    console.error('Unable to sync tables:', err);
});
