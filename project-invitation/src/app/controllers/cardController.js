const Course = require('../models/Courses');
const { mongooseToObject } = require('../../util/mongooseUtil');
const MyInvitationCards = require('../models/myInvitationCards');

class CourseController {
    //[GET] /cards/:slug
    showCard(req, res, next) {
        const invitationClassic = '651fd7721d136cf306d3ce59';
        const invitationCards = '652138dc28e0d13170a35c23';
        Course.findOne({ _id: req.params.id })
            .then((card) =>{
                if(req.params.id == invitationClassic){
                    res.render('cards/invitationClassic',{
                        card: mongooseToObject(card)
                    })
                }
                if(req.params.id == invitationCards){
                    res.render('cards/invitationCards', {
                        card: mongooseToObject(card)
                    })
                }
            })
                .catch(next);
    }
    //[POST] /cards/create
    createCards(req, res, next){
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
                author,
                image,
                role 
        } = req.body;
            const myInvitationCards = new MyInvitationCards({
                title,
                name,
                description,
                grade,
                schoolYear,
                schoolName,
                time,
                location,
                author,
                image,
                role
            });
            myInvitationCards.save()
            .then( res.status(200).json({
                msg: "Đã khởi tạo"
            }))

    }
    //[DELETE] /cards/:id
    destroyCard(req, res, next) {
        MyInvitationCards.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }
}

module.exports = new CourseController();
