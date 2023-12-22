const express = require('express');
const { saveAdmin, getAdmins, editAdmin, deleteAdmin, getAdmin } = require('../controllers/admin.controller');
const router = express()

router.get('/', getAdmins);

router.get('/:id', getAdmin);

router.post("/post/",saveAdmin);

router.put('/put/:id',editAdmin);

router.delete("/:id",deleteAdmin);

module.exports = router;