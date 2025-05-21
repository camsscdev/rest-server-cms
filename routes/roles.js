const { Router } = require('express');
const { rolesGet, rolesPut } = require('../controllers/roles');

const router = Router();

router.get('/', rolesGet);
router.put('/:id', rolesPut);

module.exports = router;
