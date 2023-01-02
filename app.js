var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fileUpload = require('express-fileupload');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var cors = require('cors');
require("dotenv").config();
var helmet = require('helmet');

// var cronjob = require('./utils/reminder');

var indexRouter = require('./routes/index');
var eventRouter = require('./routes/eventsRouter');
var reviewRouter = require('./routes/eventReviewsRouter');
var paymentRouter = require('./routes/paymentRouter');

var userRouter = require('./routes/usersRouter');
// var roleRouter = require('./routes/roleRouter');

var publicationsRouter = require('./routes/publications');
var CommentairesRouter = require('./routes/commentaires');
var ReactionsRouter = require('./routes/reactions');
var SignalerRouter = require('./routes/Signaler');

//var ReclamationRouter = require('./routes/reclamation');

var QuestionsRouter = require('./routes/Question');
var ReponsesRouter = require('./routes/Reponses');
var AimesRouter = require('./routes/Aimes');
var VotesRouter = require('./routes/Vote');

var app = express();

const db = require('./models');
db.sequelize.sync().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(cors());
// app.use(helmet());
// This disables the `contentSecurityPolicy` middleware but keeps the rest.
app.use(
    helmet({
        contentSecurityPolicy: false,
        crossOriginResourcePolicy: false
    })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/dist/savior-tech-frontend')));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());


app.use('/api/events', eventRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/payment', paymentRouter);

app.use('/api/users', userRouter);
// app.use('/roles', roleRouter);

app.use('/api/publications', publicationsRouter);
app.use('/api/commentaires', CommentairesRouter);
app.use('/api/reactions', ReactionsRouter);
app.use('/api/signaler', SignalerRouter);

//app.use('/reclamation',ReclamationRouter);
app.use('/api/questions', QuestionsRouter);
app.use('/api/reponses', ReponsesRouter);
app.use('/api/aimes', AimesRouter);
app.use('/api/vote', VotesRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;