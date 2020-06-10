const ErrorHandler = require("../../error/error.handler");

const UserServices = require("./user.service");

class UserController {
  static async getUsers(req, res, next) {
    try {
      const response = await UserServices.getUsers();
      if (response.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async postUser(req, res, next) {
    try {
      const check = await UserServices.checkUserByMobile(req.body.mobile);
      if (check.length !== 0) {
        throw new ErrorHandler(400, "Mobile allready exists.");
      }

      const response = await UserServices.postUser(req.body);
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const event = await UserServices.getUser(id);
      if (event.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }

      const response = await UserServices.deleteUser(id);
      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async getUser(req, res, next) {
    try {
      const { id } = req.params;

      const response = await UserServices.getUser(id);
      if (response.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }

      res.body = response;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }

  static async putUser(req, res, next) {
    try {
      const { id } = req.params;

      const event = await UserServices.getUser(id);
      if (event.length === 0) {
        throw new ErrorHandler(404, "Resource Not Found.");
      }

      const check = await UserServices.checkUserByMobile(req.body.mobile, id);
      if (check.length !== 0) {
        throw new ErrorHandler(400, "Mobile allready exists.");
      }

      const updatedEvent = await UserServices.putUser(req.body, event[0]);
      res.body = updatedEvent;
      next();
    } catch (error) {
      next(new ErrorHandler(error.statusCode || 500, error.message));
    }
  }
}

module.exports = UserController;
