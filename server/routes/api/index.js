const router = require('express').Router();
const cardRoutes = require('./cards');

router.use('/topics', cardRoutes);

module.exports = router;
