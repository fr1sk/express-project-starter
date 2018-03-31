

module.exports = (app) => {

    app.get('/', async (req, res) => {
        try {
            console.log('Index page');
            res.render('index.pug');
        } catch (error) {
            console.log('Index page', error);
        }
    });

}