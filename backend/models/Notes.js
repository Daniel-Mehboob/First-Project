const mongoose = require("mongoose");

const NotesSchema = new Schema({
  title: {
    type: string,
    required: true,
  },
  description: {
    type: string,
    required: true,
    unique: true,
  },
  tag: {
    type: string,
    default: "General",
  },
  date: {
    type: date,
    default: Date.now,
  },
});

modules.exports = mongoose.model("notes", NotesSchema);
