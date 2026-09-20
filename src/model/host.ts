import mongoose, { Schema, Document } from "mongoose";

export interface IHost extends Document {
  name: string;
  userId: string;
  email: string;
  password: string;
  phone: string;
  role: "host";
  image: string;
  avatar: string;

  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };

  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const HostSchema = new Schema<IHost>(
  {
    name: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["host"],
      default: "host",
    },

    image: {
      type: String,
      default: "",
    },

    avatar: {
      type: String,
      default: "",
    },

    address: {
      street: {
        type: String,
        default: "",
      },

      city: {
        type: String,
        default: "",
      },

      state: {
        type: String,
        default: "",
      },

      pincode: {
        type: String,
        default: "",
      },

      country: {
        type: String,
        default: "",
      },
    },

    isVerified: {
      type: Boolean,
      default: true,
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
