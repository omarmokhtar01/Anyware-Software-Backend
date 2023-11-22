const express = require("express");
const {
  ruleCreateAnnouncementValidator,
  ruleGetAnnouncementValidator,
  ruleUpdateAnnouncementValidator,
  ruleDeleteAnnouncementValidator,
} = require("../utils/validator/announcementValidation");

const { authProtect, allowedTo } = require("../controller/authController");

const {
  postAnnouncement,
  getAnnouncement,
  specificAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,

} = require("../controller/announcementController");

const router = express.Router();

router
  .route("/get-announcement")
  .get(getAnnouncement)

  router.route("/create-announcement")
  .post(
    authProtect,
    allowedTo("admin"),

    ruleCreateAnnouncementValidator,
    postAnnouncement
  );

router
  .route("/getOne-announcement/:id")
  .get(
    ruleGetAnnouncementValidator, 
    specificAnnouncement);

    router
    .route("/update-announcement/:id")
  .put(
    authProtect,
    allowedTo("admin"),
    ruleUpdateAnnouncementValidator,
    updateAnnouncement
  )


  router
  .route("/delete-announcement/:id")
  .delete(
    authProtect,
    allowedTo("admin"),
    ruleDeleteAnnouncementValidator,
    deleteAnnouncement
  );

module.exports = router;