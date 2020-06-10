const UserModel = require("./user.model");

class UserServices {
  static async getUsers() {
    return await UserModel.getUsers();
  }

  static async postUser(user) {
    user.otp = Math.floor(100000 + Math.random() * 900000);
    user.created_by = user.created_by || 0;
    user.is_active = user.is_active || 1;

    return await UserModel.postUser(user);
  }

  static async deleteUser(id) {
    return await UserModel.deleteUser(id);
  }

  static async getUser(id) {
    return await UserModel.getUser(id);
  }

  static async checkUserByMobile(mobile, id) {
    return await UserModel.checkUserByMobile(mobile, id);
  }

  static async putUser(updateUser, user) {
    const updatedEvent = { ...user, ...updateUser };
    await UserModel.putUser(updatedEvent);
    return UserServices.getUser(user.id);
  }
}

module.exports = UserServices;
