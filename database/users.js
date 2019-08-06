const db = require("./connect");
var userSchema = {
  username: String,
  password: String,
  email: String,
  updateregister: String,
  roles: Array
}
var USER = db.model("user", userSchema);
module.exports = USER;
