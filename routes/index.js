const quizRoute = require("./quizRoute"),
announcementRoute = require("./announcementRoute"),
authRoute = require("./authRoute");

const mountRoute = (app) => {
    app.use("/api/v1/quiz", quizRoute);
    app.use("/api/v1/announcement", announcementRoute);
    app.use("/api/v1/auth", authRoute);
  };
  
  module.exports = mountRoute;