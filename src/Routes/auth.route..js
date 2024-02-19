const Express = require('express');
const router = Express();
const authcontroller = require('../Controllers/authController');

router.get('/:name', authcontroller.get);

module.exports = router;