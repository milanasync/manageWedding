const DbHelper = require("../../db_query/db.helper");
const {
  list,
  get,
  add,
  deleteE,
  update,
} = require("../../db_query/event-functions.query");

class EventFunction {
  static async getEventFunctions() {
    const eventFunctions = await DbHelper.executeQuery(list);
    return eventFunctions;
  }

  static async postEventFunction(newEventFunction) {
    const eventFunction = await DbHelper.executeQuery(
      add,
      newEventFunction,
      "i"
    );
    return eventFunction;
  }

  static async getEventFunction(id) {
    const eventFunction = await DbHelper.executeQuery(get, { id });
    return eventFunction;
  }

  static async deleteEventFunction(id) {
    const deleted = await DbHelper.executeQuery(deleteE, { id }, "u");
    return deleted;
  }

  static async putEventFunction(eventFunction) {
    const updated = await DbHelper.executeQuery(update, eventFunction, "u");
    return updated;
  }
}

module.exports = EventFunction;
