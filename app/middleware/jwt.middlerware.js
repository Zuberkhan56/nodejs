const jwt = require("jsonwebtoken");

/**
 * @description Generate Access Token
 * @param {*} userData
 * @returns
 */
TOKEN_SECRET = "007";

function generateAccessToken(userData) {
    return jwt.sign(userData, TOKEN_SECRET, { expiresIn: "36000s" });
}

module.exports = {
  generateAccessToken,
};
