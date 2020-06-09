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
    const events = await DbHelper.executeQuery(list);
    return events;
  }

  static async postEventFunction(newEventFunction) {
    const event = await DbHelper.executeQuery(add, newEventFunction, "i");
    return event;
  }

  static async getEventFunction(id) {
    const event = await DbHelper.executeQuery(get, { id });
    return event;
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
