import { CreateBlog } from "@/models/create";
import mongoose from "mongoose";
export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const createPost = await CreateBlog.create(data);
  return Response.json(createPost);
}
export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");
  if (_id) {
    return Response.json(await CreateBlog.findById(_id));
  }
  const createPost = await CreateBlog.find().sort({ _id: -1 });
  return Response.json(createPost);
}
