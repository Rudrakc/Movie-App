const jwt = require("jsonwebtoken");

module.exports = function(req , res , next) {
  try {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    const verifiedtoken = jwt.verify(token, "bookMyShowScaler");
    console.log("HIII", verifiedtoken);
    req.body.userId = verifiedtoken.userId;
    next();
  } catch (error) {
    res.status(401).send({ success: false, message: "Token Invalid" });
  }
}
