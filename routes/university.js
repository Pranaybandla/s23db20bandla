var express = require('express'); 
const university_controlers= require('../controllers/university'); 
var router = express.Router(); 
 /* GET costumes */ 
 router.get('/', university_controlers.university_view_all_Page );
 router.get('/detail', university_controlers.university_view_one_Page);
 router.get('/create', university_controlers.university_create_Page);
 router.get('/update', university_controlers.university_update_Page);
 router.get('/delete', university_controlers.university_delete_Page); 
 module.exports = router; 


 //remove everything and paste