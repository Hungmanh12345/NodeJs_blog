import newsRouter from './news';
import meRouter from './me';
import coursesRouter from './courses';
import siteRouter from './site';


function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

export default route;
