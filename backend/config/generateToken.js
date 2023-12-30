const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  jwt.sign(
    {
      id,
    },
    "process.env.JWT_SECRET",
    {
      expiresIn: "10d",
    }
  );
};

module.exports = generateToken;
