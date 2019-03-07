//CHECKS IF USER HAS CART ON SESSION, IF NO THEN MAKE ONE. 
function checkCart(req, res, next){
    if(!req.session.user.cart){
        req.session.user.cart = [];
    }
    next();
}

module.exports = {
    checkCart
}