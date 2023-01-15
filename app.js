// **************************************************************************
// ***  NOTE: This file is to be used with expressjs for test purpposes ***
// **************************************************************************

const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/dist';
const port = 3000;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + '/index.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('App is now ready...')
})