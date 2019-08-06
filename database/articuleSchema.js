const db = require("./connect");
var schemaArticule = {
  publicdom: Date,
  contentdom: String
};
const ARTICULE = db.model("articule", schemaArticule);
module.exports = ARTICULE;
