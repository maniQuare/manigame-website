import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  name?: string;
  role: "user";
  image?: string;
}

const UserSchema = new Schema<IUser>(
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
      default: "user",
      enum: ["user"],
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel =
  mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);

export default UserModel;
