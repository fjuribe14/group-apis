routerCtrl = {}
const Msg = require('../../../models/Msg')

routerCtrl.fernandoIndex = (req, res)=>{
    res.render('fernando/index.ejs')
}

routerCtrl.sendMsg = async (req, res)=>{
    const { name, email, text } = req.body
    const msg = new Msg({
        name, email, text
    })
    await msg.save()
    res.status(200).redirect('/fernando')
}

module.exports = routerCtrl