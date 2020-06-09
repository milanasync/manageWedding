const ErrorHandler = require("../../error/error.handler");

const EventServices = require("./event.service");

class EventController {
  static async getEvents(req, res, next) {
    try {
      const response = await EventServices.getEvents();
      if (response.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async postEvent(req, res, next) {
    try {
      const response = await EventServices.postEvent(req.body);
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async deleteEvent(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventServices.getEvent(id);
      if (event.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }

      const response = await EventServices.deleteEvent(id);
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async getEvent(req, res, next) {
    try {
      const { id } = req.params;
      const response = await EventServices.getEvent(id);
      if (response.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async putEvent(req, res, next) {
    try {
      const { id } = req.params;

      const event = await EventServices.getEvent(id);
      if (event.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }
      const updatedEvent = await EventServices.putEvent(req.body, event[0]);
      res.body = updatedEvent;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }
}

module.exports = EventController;
