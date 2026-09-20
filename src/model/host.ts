import mongoose, { Schema, Document } from "mongoose";

export interface IHost extends Document {
  username: string;
  email: string;
  password: string;
  name?: string;
  role: "host";
  image?: string;
}

const HostSchema = new Schema<IHost>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      trim: true,
    },

    role: {
      type: String,
      default: "host",
      enum: ["host"],
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const HostModel =
  mongoose.models.Host ||
  mongoose.model<IHost>("Host", HostSchema);

export default HostModel;
