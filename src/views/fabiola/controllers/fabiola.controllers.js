routerCtrl = {}
const Msg = require('../../../models/Msg')

routerCtrl.fabiolaIndex = (req, res)=>{
    res.render('fabiola/index.ejs')
}

routerCtrl.fabiolaSendMsg = async (req, res)=>{
    const { name, email, text } = req.body
    const msg = new Msg({
        name, email, text
    })
    await msg.save()
    res.status(200).redirect('/fabiola')
}

module.exports = routerCtrl