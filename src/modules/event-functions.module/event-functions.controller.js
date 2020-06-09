const ErrorHandler = require("../../error/error.handler");

const EventFunctionServices = require("./event-functions.service");

class EventFunctionController {
  static async getEventFunctions(req, res, next) {
    try {
      const response = await EventFunctionServices.getEventFunctions();
      if (response.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async postEventFunction(req, res, next) {
    try {
      const response = await EventFunctionServices.postEventFunction(req.body);
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async deleteEventFunction(req, res, next) {
    try {
      const { id } = req.params;
      const event = await EventFunctionServices.getEventFunction(id);
      if (event.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }

      const response = await EventFunctionServices.deleteEventFunction(id);
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async getEventFunction(req, res, next) {
    try {
      const { id } = req.params;
      const response = await EventFunctionServices.getEventFunction(id);
      if (response.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async putEventFunction(req, res, next) {
    try {
      const { id } = req.params;

      const event = await EventFunctionServices.getEventFunction(id);
      if (event.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }
      const updatedEventFunction = await EventFunctionServices.putEventFunction(req.body, event[0]);
      res.body = updatedEventFunction;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }
}

module.exports = EventFunctionController;
