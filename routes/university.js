var express = require('express');
const university_controlers = require('../controllers/university');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or // redirect to login. 
const secured = (req, res, next) => {     
    if (req.user){       
        return next();     
    }     
        res.redirect("/login");   
    }
// GET universities
router.get('/', university_controlers.university_view_all_Page);
router.get('/detail', secured, university_controlers.university_view_one_Page);
router.get('/create', secured, university_controlers.university_create_Page);
router.get('/update', secured, university_controlers.university_update_Page);
router.get('/delete', secured, university_controlers.university_delete_Page);

module.exports = router;
