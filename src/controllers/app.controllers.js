const appCtrl = {}
const { fernandoIndex } = require('../views/fernando/controllers/fernando.controllers')
const { fabiolaIndex } = require('../views/fabiola/controllers/fabiola.controllers')
const { adminIndex, adminSignIn, adminRegister, adminDashboard } = require('../views/admin/controllers/admin.controllers')

appCtrl.fernando = fernandoIndex
appCtrl.fabiola = fabiolaIndex
appCtrl.mothtechAdmin =  {adminIndex, adminSignIn, adminRegister, adminDashboard} 

module.exports = appCtrl