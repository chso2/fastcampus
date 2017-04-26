/**
 * Created by chso2 on 2017. 4. 22..
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.render('chat/chat');
});

module.exports = router;