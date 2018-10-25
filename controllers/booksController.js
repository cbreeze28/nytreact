const db = require("../models/book");

module.exports = {
findAllBooks : function(req, res){
    db.books.find(req.query).then(dbModel => res.json(dbModel)).catch(err => res.status(500).json(err));


}
};