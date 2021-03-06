var express = require('express');
var router = express.Router();
var employeeCtrl = require('../controllers/employeeCtrl');

router.get('/', employeeCtrl.index);
router.get('/:id', employeeCtrl.show);
router.post('/', employeeCtrl.create);
router.delete('/:id', employeeCtrl.destroy);
router.put('/:id', employeeCtrl.update);

module.exports = router;