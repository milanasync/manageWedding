const express = require("express");
const EventRoutes = require("./modules/event.module/event.routes");
const EventFunctionsRoutes = require("./modules/event-functions.module/event-functions.routes");
const GlobalRoutes = require("./modules/global.module/global.routes");
const AuthRoutes = require("./modules/auth.module/auth.routes");
const UsersRoutes = require("./modules/user.module/user.routes");

const appRoutes = express.Router();

appRoutes.use("/auth", AuthRoutes);
appRoutes.use("/users", UsersRoutes);
appRoutes.use("/events", EventRoutes);
appRoutes.use("/event-functions", EventFunctionsRoutes);
appRoutes.use("/globals", GlobalRoutes);

module.exports = appRoutes;
