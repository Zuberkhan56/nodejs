const {
  getUser,
  creates,
  getUserById,
  getUserDelete,
  getUserUpdate,
  UserAllDelete,
  checkEmail,
} = require("../service/user.service");
const jwt = require("../middleware/jwt.middlerware");

exports.createUser = async (req, res) => {
  const userdb = req.body;
  const emailchk = userdb.email;
  const validEmailCheck = checkEmail(emailchk);
  validEmailCheck.then(async (data) => {
    if (data === null) {
      // Create user
      let userData = await creates(userdb);
      const data = {
        name: userData.name,
        email: userData.email,
        pin: userData.pin,
        city: userData.city,
      };
      const token = jwt.generateAccessToken(data);
      data.token = token;
      res.status(200).send({
        message: "Create user Successfully",
        data,
      });
    } else {
      console.log("login....");
      res.send(data);
    }
  });
};

exports.allUser = async (req, res) => {
  try {
    let getdata = await getUser();
    const count = getdata.length;
    res.status(200).send({
      message: "All User show",
      data: getdata,
      count,
    });
  } catch (error) {
    res.status(500).send({ message: "not show data" || error });
  }
};

exports.userIdBy = async (req, res) => {
  try {
    const userid = req.params.id;
    console.log("userId", userid);
    const datas = await getUserById(userid);
    console.log(datas);
    res.status(200).send({
      message: "One user show",
      datas,
    });
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

exports.userIdDelete = async (req, res) => {
  try {
    const usedid = req.params.id;
    const data = await getUserDelete(usedid);
    res.status(200).send({ message: "User Delete", data: data });
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

exports.userUpdate = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const data = await getUserUpdate(id, updatedData);
    res.send(data);
    // console.log("user Update",data);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

exports.allUserDelete = async (req, res) => {
  try {
    let getdata = await UserAllDelete();
    res.status(200).send({
      message: "All User Delete",
      getdata,
    });
  } catch (error) {
    res.status(500).send({ message: "not show data" || error });
  }
};
