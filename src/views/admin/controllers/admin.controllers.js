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
    let msgBadge = msgCounter[i]
    console.log(i)
    await msgCounter.push(i)
    res.render('admin/components/user/dashboard.ejs',{
        msgs,
        msgCounter,
        msgBadge
    })
}

module.exports = routerCtrl