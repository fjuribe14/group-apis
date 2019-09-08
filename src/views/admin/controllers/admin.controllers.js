routerCtrl = {}
const Msg = require('../../../models/Msg')

let msgCounter = []

routerCtrl.adminIndex = (req, res)=>{
    res.render('admin/index.ejs')
}

routerCtrl.adminSignIn = (req, res)=>{
    res.render('admin/components/user/signin.ejs')
}

routerCtrl.adminRegister = (req, res)=>{
    res.render('admin/components/user/register.ejs')
}

routerCtrl.adminDashboard = async (req, res)=>{
    const msgs = await Msg.find()
    let i = msgs.length
    msgCounter.push(i)
    const msgBadge = msgCounter[i]
    res.render('admin/components/user/dashboard.ejs',{
        msgs,
        msgCounter,
        msgBadge
    })
}

module.exports = routerCtrl