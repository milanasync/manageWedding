const EventModel = require("./event.model");

class EventServices {
  static async getEvents() {
    return await EventModel.getEvents();
  }

  static async postEvent(event) {
    event.gallery = event.gallery || null;
    event.created_by = event.created_by || 0;
    event.is_active = event.is_active || 1;

    return await EventModel.postEvent(event);
  }

  static async deleteEvent(id) {
    return await EventModel.deleteEvent(id);
  }

  static async getEvent(id) {
    return await EventModel.getEvent(id);
  }

  static async putEvent(updateEvent, event) {
    const updatedEvent = { ...event, ...updateEvent };
    await EventModel.putEvent(updatedEvent);
    return EventServices.getEvent(event.id);
  }
}

module.exports = EventServices;
