const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

dotenv.config();
const app = express();
const PUBLIC = path.join(__dirname, 'public');

app.set('port', process.env.PORT || 3000);

app.use(
    morgan('dev'),
    express.static(PUBLIC),
    express.json(),
    express.urlencoded({extended: false}),
    cookieParser(process.env.SECRET),
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SECRET,
        cookie: {
            httpOnly: true,
            secure: false
        },
        name: 'session-cookie'
    })
);

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(app.get('port'), () => console.log(`${app.get('port')} 번 포트에서 대기 중`));