const Course = require('../models/Courses');
const MyInvitationCards = require('../models/myInvitationCards');
const {
    mongooseToObject,
    mutipleMongooseToObject,
} = require('../../util/mongooseUtil');

class MeController {
    //[GET] /me/stored/courses
    storedCards(req, res, next) {
        MyInvitationCards.find({})
            .then((cards) => {
                res.render('me/storedCards', {
                    cards: mutipleMongooseToObject(cards),
                });
            })
            .catch(next);
    }

    //[GET] /me/stored/courses
    myHome(req, res, next) {
        Course.find({})
        .then((cards) => {
            res.render('me/my-home', {
                cards: mutipleMongooseToObject(cards),
            });
        })
        .catch(next);
    }
    
    //[GET] /cards/:slug
    showMyCard(req, res, next) {
        const invitationCards = '652138dc28e0d13170a35c23';
        const invitationClassic  = '651fd7721d136cf306d3ce59';
        MyInvitationCards.findOne({ _id: req.params.id })
            .then((card) =>{
                if(card.role == invitationClassic){
                    res.render('me/invitationClassicEdit',{
                         card: mongooseToObject(card)
                    })
                }
                if(card.role == invitationCards){
                    res.render('me/invitationCardsEdit', {
                            card: mongooseToObject(card)
                    })
                }
            })
            .catch(next);
    }

    //[POST] /myCards/:id
    updateMyCard(req,res,next){
        let {
            params,
            title,
            name,
            description,
            grade,
            schoolYear,
            schoolName,
            time,
            location,
    } = req.body;
    MyInvitationCards.updateOne({_id:params},{
        title,
        name,
        description,
        grade,
        schoolYear,
        schoolName,
        time,
        location,
    })
        .then( res.status(200).json({
            msg: "Đã khởi tạo"
        }))
        
    }
    

}

module.exports = new MeController();
