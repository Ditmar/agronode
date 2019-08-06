const mongo = require("mongoose");
mongo.connect("mongodb://172.18.0.2:27017/ormdb", { useNewUrlParser: true });
module.exports = mongo;
