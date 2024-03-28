const asyncHandler = require('express-async-handler');

//fetch information to make the input selections
const getInputChoices = asyncHandler(async (req, res) => {
    const inputsData = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?q=&api-key=${process.env.API_KEY}`
    );
    const inputChoices = await inputsData.json();
    res.render('home', { inputChoices });
});

const bestSellerList = asyncHandler(async (req, res) => {
    const list = encodeURIComponent(req.body.category);
    console.log(list);
   const bestList = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?&api-key=${process.env.API_KEY}`);
   const bookList = await bestList.json();
   res.render('bestSeller', {bookList});
});

module.exports = {
    getInputChoices,
    bestSellerList,
};
