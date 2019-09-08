const { Router } = require('express')
const router = Router()
const { fernando, fabiola, mothtechAdmin } = require('../controllers/app.controllers')

// mothtech_
router.route('/').get((req, res)=>{res.send('Mothtech page on bilding...')})

// fabiola
router.route('/fabiola').get(fabiola.fabiolaIndex)
router.route('/fabiola').post(fabiola.fabiolaSendMsg)

// fernando
router.route('/fernando').get(fernando.fernandoIndex)
router.route('/fernando').post(fernando.sendMsg)

// admin
router.route('/admin').get(mothtechAdmin.adminIndex)
router.route('/admin/signin').get(mothtechAdmin.adminSignIn)
router.route('/admin/register').get(mothtechAdmin.adminRegister)
router.route('/admin/dashboard/:id').get(mothtechAdmin.adminDashboard)



module.exports = router