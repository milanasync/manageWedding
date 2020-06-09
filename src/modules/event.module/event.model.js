const DbHelper = require("../../db_query/db.helper");
const {
  list,
  get,
  add,
  deleteE,
  update,
} = require("../../db_query/events.query");

class Event {
  static async getEvents() {
    const events = await DbHelper.executeQuery(list);
    return events;
  }

  static async postEvent(newEvent) {
    const event = await DbHelper.executeQuery(add, newEvent, "i");
    return event;
  }

  static async getEvent(id) {
    const event = await DbHelper.executeQuery(get, { id });
    return event;
  }

  static async deleteEvent(id) {
    const deleted = await DbHelper.executeQuery(deleteE, { id }, "u");
    return deleted;
  }

  static async putEvent(event) {
    const updated = await DbHelper.executeQuery(update, event, "u");
    return updated;
  }
}

module.exports = Event;
