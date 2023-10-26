const { mutipleMongooseToObject } = require('../../util/mongooseUtil');
const account = require('../models/account');
const Account = require('../models/account');

class AccountController {
    //[GET] /account/signin
    signin(req, res, next) {
        res.render('account/signin');
    }

    //[POST] /account/my-home
    login(req,res,next){
        let {
            userName,
            password
        } = req.body;
        if (!userName||!password)
            return res.status(500).json({
                msg: "Thiếu thông tin đăng nhập"
            });
        Account.findOne({ 
                userName: userName,
            })
            .then( user => {
                if(!user) {
                    res.status(500).json({
                        msg: "Tài khoản này không tồn tại"
                    });
                }
                let validPassword = user.password == password;
                if(!validPassword){
                    res.status(500).json({
                        msg: "Mật khẩu bạn nhập không đúng"
                    })
                }
                if(user && validPassword){
                    res.status(200).json({
                        msg: 
                        {
                            id: user._id,
                            userName: user.userName,
                            fullName: user.fullName
                        }
                    })
                }
            })

    }

    //[GET] /account/signup
    signup(req, res, next) {

        Account.find({})
            .then((accounts) => {
                accounts= accounts.map((account) => account.userName);
                res.render('account/signup', {
                    accounts,
                });
            })
            .catch(next);
    }

    //[GET] /account/my-home
    showMyHomePage(){
        res.render('me/my-home');
    }

    //[POST] /account/store
    store(req, res, next) {
        let {
            fullName,
            userName,
            password
        } = req.body;
        if (!fullName||!userName||!password)
            return res.status(500).json({
                msg: "Thiếu thông tin đăng ký"
            });
        const account = new Account({
            fullName,
            userName,
            password,
        });

        Account.findOne({ 
                userName: userName 
            })
            .then( data => {
                if(data) {
                    res.status(500).json({
                        msg: "Tài khoản đã tồn tại"
                    });
                }else {
                    account
                    .save()
                    res.status(200).json({
                        msg: "Thành công"
                    })
                }
            })
    }

    stored(req, res, next) {
        res.render("account/stored")
    }
}

module.exports = new AccountController();

