import Course from "../Models/course";
import mongooseUtils from '../../ulti/mongoose'


class CourseController {
   show(req, res ,next){
    Course.findOne({slug: req.params.slug})
    .then( course => res.render('courses/show', { course: mongooseUtils.mongooseToOject(course) }))
    .catch(next)
   }

   create(req, res ,next){
        res.render('courses/create')
   }


   store(req, res ,next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        formData.slug = formData.name.split(' ').join('-');
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    edit(req, res ,next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseUtils.mongooseToOject(course)
            }))
            .catch(next)
   }

   update(req, res ,next){
       Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)
   }

   delete(req, res ,next){
       Course.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
   }

   restore(req, res ,next){
    Course.restore({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(next)
   }

   forceDelete(req, res ,next){
    Course.deleteOne({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(next)
   }

   handleformaction(req, res ,next){
       switch(req.body.action){
        case 'delete':
            Course.delete({_id: { $in: req.body.courseIds}})
                .then(() => res.redirect('back'))
                .catch(next)
            break;
        default:
            res.json({message: 'Action is invailid'})
       }
       
   }
}

export default CourseController
