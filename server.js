var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
   
//     var sql = require("mssql");

//     // config for your database
//     var config = {
//         user: 'root',
//         password: '',
//         server: 'localhost', 
//         database: 'mysql' 
//     };

//     // connect to your database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query('select * from patientdb', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//     });
// });

var server = app.listen(5000, function () {
    console.log('Server is running..');
});


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "isohack"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


// $fist = $_POST['first'];
// $last = $_POST['last'];
// $dob = $_POST['dob'];
// $city = $_POST['city'];
// $state = $_POST['state'];
// $file = $_POST['file'];

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "isohack"
});

router.post('/server', function(req, res, next) {
    console.log(req.body.first);
    console.log(req.body.last);
    // console.log(req.body.description);
    con.connect(function(err) {
  if (err) throw  err;
  console.log("connected");
  var sql = "INSERT INTO customers VALUES ('"+req.body.firstName+"','"+req.body.secondName+"')";
  alert(sql);
  con.query(sql, function(err, result)  {
   if(err) throw err;
   console.log("table created");
  });
});

  res.render('index', { title: 'Express' });
});


module.exports = router;