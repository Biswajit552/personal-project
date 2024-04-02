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
      type: String,
    },
    // username: {
    //   type: String,
    // },
  },
  { timestamps: true }
);
export const CreateBlog = models?.CreateBlog || model("CreateBlog", PostSchema);
