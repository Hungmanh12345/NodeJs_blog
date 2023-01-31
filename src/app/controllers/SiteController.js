import Course from "../Models/course";
import mongooseUtils from '../../ulti/mongoose'

// const {mongooseToOject, mutipleMongooseToOject} = mongooseUtils
class SiteController {
    // get , news
    index(req, res, next) {
            Course.find({})
                .then(courses =>  {
                    res.render('home', {
                        courses: mongooseUtils.mutipleMongooseToOject(courses)
                    })
                })
                .catch(next);
        
    }

    search(req, res) {
        res.render('search');
    }
}

export default SiteController;
