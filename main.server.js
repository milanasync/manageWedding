const express = require("express");
const morgan = require("morgan");
const passport = require("passport");

const { getConnection } = require("./src/dbObject");

const formatErrorResponse = require("./src/middleware/format-error.middleware");
const formatResponse = require("./src/middleware/format-response.middleware");

const app = new express();
const port = 3001;

app.use(express.json());

// middleware
app.use(morgan(":method :url :status :response-time"));
// app.use(passport.initialize());

// routes
const AppRoutes = require("./src/app.routes");

app.use("/", AppRoutes);

// middleware before response sent
app.use(formatResponse);
app.use(formatErrorResponse);

app.listen(port, (_) => console.log(`server is up at port ${port}...`));
