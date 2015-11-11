var paths=require('./config/paths.js'),
    express = require(paths.node_module+'express'),
    cors = require(paths.node_module+'cors'),
    http = require('http').Server(express),
    validator = require(paths.node_module+'validator'),
    favicon = require(paths.node_module+'serve-favicon'),
    bodyParser = require(paths.node_module+'body-parser'),
    flash = require(paths.node_module+'connect-flash'),
    session = require(paths.node_module+'express-session'),
    cookieParser = require(paths.node_module+'cookie-parser'),
    Sequelize = require(paths.node_module+'sequelize'),
    multer = require(paths.node_module+'multer'),
    serializeobject = require(paths.node_module+'serialize-object'),
    moment = require(paths.node_module+'moment'),
    database=require('./config/database.js'),
    router=require('./config/router.js');

var app = express();
app.use(favicon(paths.uploads+'/favicon.ico'));
app.use(cors());
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cookieParser()); // read cookies (needed for auth) 
app.use(bodyParser.urlencoded());
app.use('/extjs', express.static(paths.extjs_app));
app.use('/js', express.static(paths.user));
app.use('/uploads', express.static(paths.uploads));
app.use('/views', express.static(paths.views));
//app.use(express.favicon("/uploads/favicon.ico"));

app.use(multer({ dest: './uploads/images/' }));

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(flash()); // use connect-flash for flash messages stored in session

var server = app.listen(8080);
var io = require(paths.node_module+'socket.io').listen(server);
database.connect(Sequelize);
database.synchronize();

router.initialization(app,io,database.Tables);