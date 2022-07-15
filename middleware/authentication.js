const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json("Authentication token invalid");
    }
    req.user = user;
    next();
  });
};

const authenticateUser = (req, res, next) => {
  authenticate(req, res, () => {
    if (req.user.userId === req.params.id) {
      next();
    } else {
      return res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  authenticate,
  authenticateUser,
};
