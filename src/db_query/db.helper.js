const { getConnection } = require("../dbObject");
const { QueryTypes } = require("sequelize");

const QueryType = {
  s: QueryTypes.SELECT,
  i: QueryTypes.INSERT,
  u: QueryTypes.UPDATE,
};

class DbHelper {
  static dbObject;
  static getConnection = async (_) => {
    DbHelper.dbObject = await getConnection();
  };

  static executeQuery = async (query, replacements = {}, type = "s") => {
    if (
      query === "" ||
      query === undefined ||
      query === false ||
      query === null
    )
      return;

    if (QueryType[type] === undefined) return;

    // set dbObject
    await DbHelper.getConnection();

    const resultSet = await DbHelper.dbObject.query(query, {
      type: QueryType[type],
      replacements,
    });
    return resultSet;
  };
}

module.exports = DbHelper;
