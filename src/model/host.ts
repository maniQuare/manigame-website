import mongoose, {Schema, Document} from "mongoose";


// Defiend is the type of data interface as Message

export interface Message extends Document{
  content: string;
  createdAt: Date
}

// create at the mogoose Message schema and use my custome type interface

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,

  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})


// Defiend is the type of data interface as User

export interface User extends Document{
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[]
}

// create at the mogoose User schema and use my custome type interface

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true

  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Plese use a valid email address"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  verifyCode: {
    type: String,
    required: [true, "Verify code is required"]
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify code Expiry is required"]
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true
  },
  messages: [MessageSchema]
})


// use the nextjs edge type firmework thats is nextjs find this app use the fist time boot or not thats whay you can apply conditions............and export default

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel;
