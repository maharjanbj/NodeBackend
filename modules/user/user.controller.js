const userSchema = require("./user.schema");

const getUser = async (req, res) => {
  const users = await userSchema.find({});
  res.send({
    data: users,
    status: 200,
    message: "User retrieved successfully",
  });
};

const getUserById = async (req, res) => {
    try{
        const user = await userSchema.findOne({ _id: req.params.id });
        res.send({
          data: user,
          status: 200,
          message: "User retrieved successfully",
        });
    }catch(e){
        res.status(400).send('User not found');
    }
};

const postUser = async (req, res) => {
  console.log(req.body);
  try{
    const user = await userSchema.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        status: req.body.status ?? 0,
      });
      res.send({
        data: user,
        status: 201,
        message: "User Created successfully",
      });
  }catch(e){
    res.status(400).send('User could not be created');
  }
};

const putUser = async (req, res) => {
  console.log(req.body);
  const user = await userSchema.findByIdAndUpdate(req.params.id, {
    ...req.body,
  });
  res.send({
    data: user,
    status: 201,
    message: "User Updated successfully",
  });
};

const deleteUser = async (req, res) => {
    const user = await userSchema.deleteOne({_id: req.params.id})
    res.send("User deleted Successfully");
};

module.exports = {
  getUser,
  postUser,
  putUser,
  getUserById,
  deleteUser
};
