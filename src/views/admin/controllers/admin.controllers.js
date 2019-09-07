routerCtrl = {}

routerCtrl.adminIndex = (req, res)=>{
    res.render('admin/index.ejs')
}

routerCtrl.adminSignIn = (req, res)=>{
    res.render('admin/components/user/signin.ejs')
}

routerCtrl.adminRegister = (req, res)=>{
    res.render('admin/components/user/register.ejs')
}

routerCtrl.adminDashboard = (req, res)=>{
    res.render('admin/components/user/dashboard.ejs')
}

module.exports = routerCtrl