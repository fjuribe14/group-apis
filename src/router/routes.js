const { Router } = require('express')
const router = Router()
const { adminIndex, adminSignIn, adminRegister, adminDashboard } = require('../views/admin/controllers/admin.controllers')
const { fernandoIndex } = require('../views/fernando/controllers/fernando.controllers')
const { fabiolaIndex } = require('../views/fabiola/controllers/fabiola.controllers')

router.route('/').get((req, res)=>{res.send('Mothtech page on bilding...')})

router.route('/admin').get(adminIndex)
router.route('/admin/signin').get(adminSignIn)
router.route('/admin/register').get(adminRegister)
router.route('/admin/dashboard/:id').get(adminDashboard)

router.route('/fernando').get(fernandoIndex)

router.route('/fabiola').get(fabiolaIndex)

module.exports = router