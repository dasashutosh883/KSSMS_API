const express = require('express');
const router = express();
const controller = require('../Controllers/personController');


/* METHODS */
router.get('/', controller.get);
router.get('/:id', controller.getone);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


module.exports = router;