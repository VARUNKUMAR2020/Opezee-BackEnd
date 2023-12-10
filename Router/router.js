const express = require('express');
const { allApps, newApps, deleteApps } = require('../Controller/apicontroller');
const router = express.Router();

//API Routers
router.route('/apps').get(allApps);
router.route('/newapp').post(newApps);
router.route('/deleteApps').post(deleteApps);

module.exports = router;