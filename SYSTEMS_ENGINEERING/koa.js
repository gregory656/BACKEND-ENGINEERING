//All three frameworks provide similar functionality, but with different approaches.
//  Express.js is the most widely used and has the largest community support.
//  Koa is a more modern alternative that provides a more flexible and powerful way to handle middleware. 
// Hapi is designed to be configuration-driven and provides a set of features and utilities to help you build robust and scalable web applications.

//BASIC GET REQUEST HANDLER USING KOA
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  if (ctx.url === '/'){
    ctx.body = 'Hello World!';
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

//BASIC POST REQUEST HANDLER USING KOA
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());

app.use(async (ctx) => {
  if (ctx.url === '/api/users') {
    if (ctx.method === 'POST') {
      const user = ctx.request.body;
      // save user to database
      ctx.body = user;
    }
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


//MIDDLEWARE IN KOA
const Koa = require('koa');
const koaLogger = require('koa-logger');
const app = new Koa();

app.use(koaLogger());

app.use(async (ctx) => {
  ctx.body = 'Hello World!';
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


//ERROR HANDLING IN KOA
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

app.use(async (ctx) => {
  ctx.body = 'Hello World!';
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});