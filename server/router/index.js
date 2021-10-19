const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    // console.log('index route');
    res.send('server route is up');
});

module.exports = indexRouter;