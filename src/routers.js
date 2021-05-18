const { Router } = require('express');

const addSvg = require('./controllers/api/addSvg');
const getSvg = require('./controllers/api/getSvg');
const deleteSvg = require('./controllers/api/deleteSvg');
const likeSvg = require('./controllers/api/likeSvg');

const ping = require('./controllers/ping');
const pages = require('./controllers/pages');

// routes for /api

const apiRouter = new Router();

apiRouter.get('/svgs/:id', getSvg);
apiRouter.post('/svgs', addSvg);
apiRouter.put('/svgs/:id', likeSvg);
apiRouter.delete('/svgs/:id', deleteSvg);

exports.apiRouter = apiRouter;

// routes for /

const mainRouter = new Router();

mainRouter.get('/ping', ping);

mainRouter.get('/svg/:id', pages.svg);
mainRouter.get('/', pages.home);

exports.mainRouter = mainRouter;