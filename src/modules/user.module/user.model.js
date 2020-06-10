const DbHelper = require("../../db_query/db.helper");
let {
  list,
  get,
  add,
  deleteE,
  update,
  mobileQ,
} = require("../../db_query/user.query");

class User {
  static async getUsers() {
    const users = await DbHelper.executeQuery(list);
    return users;
  }

  static async postUser(newEvent) {
    const user = await DbHelper.executeQuery(add, newEvent, "i");
    return user;
  }

  static async getUser(id) {
    const user = await DbHelper.executeQuery(get, { id });
    return user;
  }

  static async deleteUser(id) {
    const deleted = await DbHelper.executeQuery(deleteE, { id }, "u");
    return deleted;
  }

  static async putUser(user) {
    const updated = await DbHelper.executeQuery(update, user, "u");
    return updated;
  }

  static async checkUserByMobile(mobile, id) {
    if (id !== undefined) {
      mobileQ += ` AND id != '${id}'`;
    }
    const user = await DbHelper.executeQuery(mobileQ, { mobile });
    return user;
  }
}

module.exports = User;
