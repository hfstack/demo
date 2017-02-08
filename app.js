const app = require('koa')();
const koa = require('koa-router')();
const json = require('koa-json');
const logger = require('koa-logger');
const auth = require('./server/routes/auth.js');
const api = require('./server/routes/api.js');
const jwt = require('koa-jwt');
const server = require('koa-static');
const path = require('path');
const historyApiFallback = require('koa-history-api-fallback'); // 引入依赖

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());
app.use(historyApiFallback());
app.use(server(path.resolve('dist')));
app.listen(80, () => {
  console.log('Koa is listening in 8889');
});
koa.use('/auth', auth.routes()); // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
koa.use('/api', jwt({secret: 'vue-koa-demo'}), api.routes());

app.use(koa.routes());
app.on('error', function(err, ctx) {
  console.log('server', err);
});

module.exports = app;
