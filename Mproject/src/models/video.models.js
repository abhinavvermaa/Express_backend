import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    videofile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: number,
      required: true,
    },
    views: {
      type: number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const video = mongoose.model("Video", videoSchema)