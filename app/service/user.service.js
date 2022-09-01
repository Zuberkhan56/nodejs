const User = require("../models/user.model");

async function creates(user) {
  return await User.create(user)
    .then((data) => data)
    .catch((err) => `Some error occurred while creating the User`);
}
async function getUser() {
  return await User.find()
    .then((data) => data)
    .catch((err) => "Error");
}
async function getUserById(params) {
  return await User.findById(params)
    .then((data) => data)
    .catch((err) => "Error");
}

async function getUserDelete(params) {
  return await User.deleteOne({ params })
    .then((data) => data)
    .catch((err) => `Error`);
}
async function getUserUpdate(params, data) {
  // const options = { new: true };
  return await User.findByIdAndUpdate(params, data)
    .then((data) => data)
    .catch((err) => `Error`);
}
async function UserAllDelete() {
  // const options = { new: true };
  return await User.deleteMany()
    .then((data) => console.log("All Data successfully deleted"))
    .catch((err) => `Error`);
}
async function checkEmail(email) {
  return await User.findOne({email:email})
    .then((data) => data)
    .catch((err) => `Error`);
}

// async function checkEmail(email) {
//   console.log("email"); 
// }

module.exports = {
  creates,
  getUser,
  getUserById,
  getUserDelete,
  getUserUpdate,
  UserAllDelete,
  checkEmail
};
