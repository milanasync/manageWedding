const EventFunctionModel = require("./event-functions.model");

class EventFunctionServices {
  static async getEventFunctions() {
    return await EventFunctionModel.getEventFunctions();
  }

  static async postEventFunction(eventFunction) {
    eventFunction.created_by = eventFunction.created_by || 0;
    eventFunction.is_active = eventFunction.is_active || 1;

    return await EventFunctionModel.postEventFunction(eventFunction);
  }

  static async deleteEventFunction(id) {
    return await EventFunctionModel.deleteEventFunction(id);
  }

  static async getEventFunction(id) {
    return await EventFunctionModel.getEventFunction(id);
  }

  static async putEventFunction(updateEventFunction, eventFunction) {
    const updatedEventFunction = { ...eventFunction, ...updateEventFunction };
    await EventFunctionModel.putEventFunction(updatedEventFunction);
    return EventFunctionServices.getEventFunction(eventFunction.id);
  }
}

module.exports = EventFunctionServices;
