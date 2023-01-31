import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { connect } from './config/db';
import route from './routes';
import methodOverride from 'method-override';

connect();

const app = express();
const port = 3000;

app.use(methodOverride('_method'))
app.use(express.static(path.join(process.cwd(), 'src/public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(morgan('combined'));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b
        }
    }),
    
);
app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), 'src','resources','views'));

route(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
