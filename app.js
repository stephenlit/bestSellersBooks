const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');

//urlencoded and json
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//set up public directory for css
app.use(express.static(path.join(__dirname, '/public')));

//set EJS as the view engine and specify the view directory.
const viewsDirectory = path.join(__dirname, 'views');
app.set('view engine', 'ejs');
app.set('views', viewsDirectory);

app.use(cors());

app.use('/', require('./routes/booksRoutes'));

// app.get('/list', async (req, res) => {
//     const data = await bookData();
//     res.render('home', {data});
// })




//listen on port 3000
app.listen(3000, ()=> {
    console.log('listening on port 3000');
});