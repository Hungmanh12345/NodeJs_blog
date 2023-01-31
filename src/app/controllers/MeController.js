import Course from "../Models/course";
import mongooseUtils from '../../ulti/mongoose'

// const {mongooseToOject, mutipleMongooseToOject} = mongooseUtils
class MeController {

    StoredCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => 
                res.render('me/Stored-Courses',{
                deletedCount,
                courses: mongooseUtils.mutipleMongooseToOject(courses)
            }))
            .catch(next)
    }
    TrashCourses(req, res, next){
        Course.findDeleted({})
            .then(courses => res.render('me/Trash-Courses',{
                courses: mongooseUtils.mutipleMongooseToOject(courses)
            }))
            .catch(next)
    }
}

export default MeController;
