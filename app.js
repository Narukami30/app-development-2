const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');

//this will set the ejs as the view engine
app.set('view engine', 'ejs');

//parsing incoming requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//this is the routes that defined in the index.js file
app.use('/', indexRoutes);

//this will start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});