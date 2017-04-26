/**
 * Created by chso2 on 2017. 4. 22..
 */
module.exports = function(req, res, next){
    if(!req.isAuthenticated()){
        res.redirect('/accounts/login');
    }else{
        return next();
    }
};

