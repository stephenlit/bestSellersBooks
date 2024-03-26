const asyncHandler = require('express-async-handler');

//fetch information to make the input selections
const getInputChoices = asyncHandler(async (req, res) => {
    const inputsData = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?q=&api-key=${process.env.API_KEY}`
    );
    const inputChoices = await inputsData.json();
    res.render('home', {inputChoices});
});


module.exports = {
    getInputChoices,
}