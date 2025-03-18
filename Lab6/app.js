const express = require('express'); //required to use 'express' module that allows to template our pages
const path = require("path"); //required to use 'path' module that gets the current directory
const app = express(); //create an app from express
const port = 3000; //define our port number, this doesn’t have to be 3000npm

//------------------------File upload---------------------------
const fileUpload = require("express-fileupload");
app.use(fileUpload());

// Set up the 'views' directory for EJS templates
app.set('views', path.join(__dirname, 'views'));
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route for a specific URL ("/uploadpage") which renders the upload-image
app.get("/uploadpage", (req, res) => {
    return res.render("upload-images");
});

app.get("/test", (req, res) => {
    return res.render("test");
});


// Define a basic route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello, You\'ve reached your App!!!');
});

// Route to handle the form submission
app.post('/upload', async(req, res) => {
    console.log("uploading image");
    // Access form data, including the image and caption
    const caption = req.body.caption;
    const uploadedFile = req.files.filename;


    // todo: add today's date
    var newfilename = "today" + uploadedFile.name;




    // Move the uploaded image to a specified folder
    const uploadPath = path.join(__dirname, 'assets/uploads', newfilename);
    uploadedFile.mv(uploadPath, (err) => {
        if (err) { //debug error if occurs
            return res.status(500).send(err);
        }


        // Process the file as needed (e.g., save to database, send a response, etc.)
        // ...
        console.log("uploaded to" + uploadPath);
        res.send('File uploaded!');
    });




    // Send a response
    console.log('Form submitted successfully!');
});


// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`));


