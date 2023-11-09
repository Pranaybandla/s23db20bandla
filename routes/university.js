

var express = require('express'); 
const university_controlers= require('../controllers/university'); 
var router = express.Router(); 
 /* GET costumes */ 
 router.get('/', university_controlers.university_view_all_Page ); 
 module.exports = router; 


 //remove everything and paste