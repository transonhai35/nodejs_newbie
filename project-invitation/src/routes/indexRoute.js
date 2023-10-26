const meRouter = require('./meRoute');
const cardsRouter = require('./cardsRoute');
const siteRouter = require('./siteRoute');
const accountRouter = require('./accountRoute');

function route(app) {
    app.use('/me', meRouter);
    app.use('/cards', cardsRouter);
    app.use('/account', accountRouter);
    app.use('/', siteRouter);
}

module.exports = route;
