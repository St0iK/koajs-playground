const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const mongoose = require('mongoose');

mongoose.connect('');
const Articles = require('./models/Articles');
const Authors = require('./models/Authors');
const Sentiments = require('./models/Sentiments');

const app = new Koa();
const router = new Router();

app.use(logger());

// error handling
app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
});

router.get('/', (ctx, next) => {
  // const id = "5bfac62f6bc7b200042f0a49";
  // Articles.findOne(id, function (err, article) { 
  //    console.log('Olo malakies');
  //    console.log(article);
  // }  );
  Articles.findOne({email: "karen60@hill-ortiz.com"}, function (err, article) { 
    //  console.log('Olo malakies');
    //  console.log(article);
    //  console.log(err);

     
     
   })
   .populate('author')
   .populate('sentiment');


  

   Articles.paginate({}, { page: 1, limit: 10, populate: ["author","sentiment"], lean:true }, function(err, result) {
     console.log(result)
    // result.docs
    // result.total
    // result.limit - 10
    // result.page - 3
    // result.pages
});

 ctx.body = 'Hello World!';
});



app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);



// API Endpoints

//  GET '/' -> All articles (pagination) {with sentiment > 1, fromDate,toDate, by source}
