const express = require("express");
const {
  getNotes,
  createdNote,
  getNoteById,
  UpdateNote,
  deleteNote,
} = require("../controllers/noteController");
const { protect } = require("../middlewares/aythMiddleware");
const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createdNote);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, deleteNote);

module.exports = router;
