var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
mongoose.connect('mongodb://huda:123@ds247058.mlab.com:47058/shopping').then(function () {
    console.log("Hi silly dataBase")
}).catch(function (error) {
    console.log(error.message)
})

var Feed = mongoose.model(
  'Feed' , {
    name:String,
    myFeed:String
  }
) ;
var Woman = mongoose.model(
    'Woman' , {
      name:String ,
      price:Number ,
      img:String
    });
var Man = mongoose.model(
    'Man' , {
        name:String ,
        price:Number ,
        img:String
    });
var Bag = mongoose.model(
    'Bag' , {
        name:String ,
        price:Number ,
        img:String
    });
var Computer = mongoose.model(
    'Computer' , {
        name:String ,
        price:Number ,
        img:String
    });
var Home = mongoose.model(
    'Home' , {
        name:String ,
        price:Number ,
        img:String
    });
var Phone = mongoose.model(
    'Phone' , {
        name:String ,
        price:Number ,
        img:String
    });

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/feedback', function(req, res, next) {
  res.render('feedback', { title: 'Express' });
});
router.post('/api/feed' , function (req , res) {
  var a = req.param('feeds') ;
  var  newFeed = new Feed(a);
  newFeed.save().then(function(){
    res.json({
      isSuccess:true,
      message:"it is saved"
    })
  }).catch(function (error) {
    res.json({
      isSuccess:false,
      message:error.message
    })
  })
})
router.get('/api/feed', function(req ,res){
    Feed.find(function (error,feeds) {
        res.json(feeds)
    })
})
router.delete('/api/feed', function(req ,res) {
  var id = req.param('id');
  Feed.findByIdAndRemove(id).then(function(){
    res.json({
      isSuccess:true,
      message:"it is saved"
    })
  }).catch(function (error) {
    res.json({
      isSuccess:false,
      message:error.message
    })
  })
})

router.get('/man', function(req, res, next) {
    res.render('man');
  })

router.get('/api/man', function(req ,res){
    Man.find(function (error,man) {
        res.json(man)
    })
})
router.post('/api/man' , function (req , res) {
    var a = req.param('man') ;
    var  newMan = new Man(a);
    newMan.save().then(function(){
      res.json({
        isSuccess:true,
        message:"it is saved"
      })
    }).catch(function (error) {
      res.json({
        isSuccess:false,
        message:error.message
      })
    })
})
router.get('/add', function(req, res, next) {
    res.render('add');

});
router.get('/woman',function (req ,res) {
  res.render('woman') ;

});
router.get('/api/woman', function(req ,res){
    Woman.find(function (error,woman) {
        res.json(woman)
    })
})
router.post('/api/woman' , function (req , res) {
  var a = req.param('woman') ;
  var  neWoman = new Woman(a);
  neWoman.save().then(function(){
    res.json({
      isSuccess:true,
      message:"it is saved"
    })
  }).catch(function (error) {
    res.json({
      isSuccess:false,
      message:error.message
    })
  })
})
router.get('/bags', function(req, res, next) {
    res.render('bags');

});
router.get('/api/bag', function(req ,res){
    Bag.find(function (error,bags) {
        res.json(bags)
    })
})
router.post('/api/bag' , function (req , res) {
    var b = req.param('bags') ;
    var  newBag = new Bag(b);
    newBag.save().then(function(){
      res.json({
        isSuccess:true,
        message:"it is saved"
      })
    }).catch(function (error) {
      res.json({
        isSuccess:false,
        message:error.message
      })
    })
})
router.get('/computer', function(req, res, next) {
    res.render('computer');
});
router.get('/api/computer', function(req ,res){
    Computer.find(function (error,computers) {
        res.json(computers)
    })
})
router.post('/api/computer' , function (req , res) {
    var c = req.param('computers') ;
    var  newComputer = new Computer(c);
    newComputer.save().then(function(){
      res.json({
        isSuccess:true,
        message:"it is saved"
      })
    }).catch(function (error) {
      res.json({
        isSuccess:false,
        message:error.message
      })
    })
})
module.exports = router;
