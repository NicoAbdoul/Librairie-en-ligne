const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');
const loanRoutes = require('./routes/loans');/*
const reviewRoutes = require('./routes/reviews');
const recommendationRoutes = require('./routes/recommendations');
const eventRoutes = require('./routes/events');*/

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/loans', loanRoutes);/*
app.use('/reviews', reviewRoutes);
app.use('/recommendations', recommendationRoutes);
app.use('/events', eventRoutes);*/

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
