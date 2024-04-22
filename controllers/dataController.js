const asyncHandler = require('express-async-handler');

//fetch information to make the input selections
const getInputChoices = asyncHandler(async (req, res) => {
    const inputsData = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?q=&api-key=${process.env.API_KEY}`
    );
    const inputChoices = await inputsData.json();
    // array of book genre for getting top 10 of
    const top10Genre = [
        'Young Adult',
        'Sports',
        'Family',
        'Celebrities',
        'Culture',
        'Humor',
        'Business Books',
        'Education',
        'Series Books',
        'Science',
        'Travel',
    ];
    const filteredInputChoices = inputChoices.results.filter(
        (result) => {
            return top10Genre.includes(result.list_name);
        }
    );

    res.render('home', { filteredInputChoices });
});

const bestSellerList = asyncHandler(async (req, res) => {
    const list = req.params.id;
    const bestList = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?&api-key=${process.env.API_KEY}`
    );
    const bookList = await bestList.json();
    //console.log(bookList);
    res.render('bestSeller', { bookList });
});

module.exports = {
    getInputChoices,
    bestSellerList,
};
