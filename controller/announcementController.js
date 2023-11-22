const announcementModel = require("../models/announcementModel");
const handler = require("./handlerFactory");




// @desc Create Announcement
// @route Post /api/v1/Announcement
// @access Private
exports.postAnnouncement = handler.createHandler(announcementModel);

// @desc Get Specific Announcement
// @route Get /api/v1/Announcement/:id
// @access Public
exports.specificAnnouncement = handler.getSpecificOne(announcementModel);

// @desc Get all Announcement
// @route Get /api/v1/Announcement
// @access Public
exports.getAnnouncement = handler.getAll(announcementModel, "Announcement");

// @desc Update specific Announcement
// @route Put /api/v1/Announcement/:id
// @access Private
exports.updateAnnouncement = handler.updateHandler(announcementModel);

// @desc Delete specific Announcement
// @route delete /api/v1/Announcement/:id
// @access Private
exports.deleteAnnouncement = handler.deleteHandler(announcementModel);