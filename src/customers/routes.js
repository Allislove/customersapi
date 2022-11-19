const { Router } = require('express');
const router = Router();
const controller = require('./controller');


router.post('/customers', controller.addCustomers);
router.get('/customers', controller.getCustomers);


module.exports = router;