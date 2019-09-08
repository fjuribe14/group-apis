const appCtrl = {}
const { fernandoIndex, sendMsg } = require('../views/fernando/controllers/fernando.controllers')
const { fabiolaIndex, fabiolaSendMsg } = require('../views/fabiola/controllers/fabiola.controllers')
const { adminIndex, adminSignIn, adminRegister, adminDashboard } = require('../views/admin/controllers/admin.controllers')

appCtrl.fernando = { fernandoIndex, sendMsg }
appCtrl.fabiola = { fabiolaIndex, fabiolaSendMsg }
appCtrl.mothtechAdmin =  {adminIndex, adminSignIn, adminRegister, adminDashboard}

module.exports = appCtrl