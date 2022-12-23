const express = require("express");
const Router = express.Router();

const {
  profile,
  alllectures,
  searchLecture,
  getTeachers,
  playlist,
  video
} = require("../controllers/user.controller");
//admin routes......................

//profile of the particular user......................
Router.post("/profile", profile);

//all posts displayed........
Router.get("/alllectures", alllectures);

//playlist displayed here........
Router.get("/lecture/:playlist", playlist);

//particular video........
Router.get("/:video", video);

//search lectures........
Router.get("/:std/:sub", searchLecture);

//all teachers displayed...............
Router.get("/teachers", getTeachers);

module.exports = Router;
