const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = mongoose.Schema(
  {
    body: { type: String, required: true },
    post: { type: ObjectId, ref: "Post" },
  },
  { timestamps: true }
);

mongoose.model("Comment", commentSchema);
