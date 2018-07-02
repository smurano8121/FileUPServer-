var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //cb(null, 'C://Users/light1/VWphoto/before')
    cb(null, 'C://Users/smura/Pictures')
  },
  filename: function (req, file, cb) {
    var date_obj = new Date();
    cb(null, date_obj.getTime()+file.originalname)
  }
})

var upload = multer({ storage: storage }).single('thumbnail');

router.post('/', upload, function(req, res) {
  res.json({ 'result': 'success!' });
})

module.exports = router;
