import mongoose, { model, models, Schema } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: Array,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);
export const ProjectImage =
  models?.ProjectImage || model("ProjectImage", PostSchema);
