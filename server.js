const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const mongoose = require('mongoose');
const Location = require('./server-mongoose/models/locationModel');
const locationController = require('./server-mongoose/controllers/locationController');
const yelpApi = require('./controllers/yelpApi');
const userController = require('./server-mongoose/controllers/userController');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://pinkfairyarmadillo:pinkfairyarmadillo@ds121535.mlab.com:21535/pinkfairyarmadillo');
mongoose.connection.once('open', (err, success) => {
  if (err) console.log('NOOOOOOOO');
  console.log('CONNECTED YAYYYYY');
})
// then(
//   () => {console.log('SUCCESSFULLY CONNECTED!')},
//   err => {console.log('ERROR CONNECTING')}
// );

// mongoose.connect('mongodb://thejozhou:database123@ds119585.mlab.com:19585/trvlr');
// mongoose.connection.once('open', () =>{
//   console.log('connected')
// });


const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(bodyParser.json())
const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/query', locationController.findMatches);
app.post('/creating', locationController.create);
app.get('/yelpdata:location', yelpApi.sendYelpReq);
app.post('/createuser', userController.createUser);
app.post('/login' , userController.login);


const server = app.listen(3000, function () {
  const port = server.address().port;
  console.log('listening at port', port);
});