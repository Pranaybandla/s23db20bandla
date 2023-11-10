var university = require('../models/university');  
// List of all universities 
exports.university_list = function(req, res) {     
    res.send('NOT IMPLEMENTED: university list'); 
};  
// for a specific universities. 
exports.university_detail = function(req, res) {     
    res.send('NOT IMPLEMENTED: university detail: ' + req.params.id); 
};  
// Handle universities create on POST. 
exports.university_create_post = function(req, res) {     
    res.send('NOT IMPLEMENTED: university create POST'); 
};  
// Handle university delete form on DELETE. 
exports.university_delete = function(req, res) {     
    res.send('NOT IMPLEMENTED: university delete DELETE ' + req.params.id); 
};  
// Handle university update form on PUT. 
exports.university_update_put = function(req, res) {     
    res.send('NOT IMPLEMENTED: university update PUT' + req.params.id); 
}; 

// List of all universities 
exports.university_list = async function(req, res) {     
    try{         
        theuniversities = await university.find();         
        res.send(theuniversities);     
    }     
    catch(err){         
            res.status(500);         
            res.send(`{"error": ${err}}`);     
        }   
    };

    // VIEWS 
    // Handle a show all view 
    exports.university_view_all_Page = async function(req, res) {     
        try{         
            theuniversity = await university.find();         
            res.render('university', { title: 'University Search Results', results: theuniversity });     
        }     
        catch(err){         
            res.status(500);         
            res.send(`{"error": ${err}}`);    0 
        }   
    }; 

// Handle Costume create on POST. 
exports.university_create_post = async function(req, res) {     
    console.log(req.body)     
    let document = new university();     
    // We are looking for a body, since POST does not have query parameters.     
    // Even though bodies can be in many different formats, we will be picky     
    // and require that it be a json object     
    // {"costume_type":"goat", "cost":12, "size":"large"}     
    document.university_id = req.body.university_id;     
    document.name = req.body.name;     
    document.location = req.body.location;     
    try{         
        let result = await document.save();         
        res.send(result);     
    }     
    catch(err){         
        res.status(500);         
        res.send(`{"error": ${err}}`);     
    }   
}; 

exports.university_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await university.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//New code for Assignment 12 for screenshot2
//Handle university update form on PUT
exports.university_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await university.findById(req.params.id)
        // Do updates of properties
        if (req.body.university_id)
            toUpdate.university_id = req.body.university_id;
        if (req.body.name) toUpdate.name= req.body.name;
        if (req.body.location) toUpdate.location= req.body.location;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};