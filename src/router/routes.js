const { Router } = require('express')
const router = Router()
const { fernandoIndex } = require('../views/fernando/controllers/fernando.controllers')
const { fabiolaIndex } = require('../views/fabiola/controllers/fabiola.controllers')

router.route('/').get((req, res)=>{res.send('Mothtech page on bilding...')})
router.route('/fernando').get(fernandoIndex)
router.route('/fabiola').get(fabiolaIndex)

module.exports = router