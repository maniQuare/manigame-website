import dbConfig from "@/lib/dbConfig";
import UserModel from "@/model/User";
import HostModel from "@/model/Host";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    await dbConfig();

    const { email, password, role } = await request.json();

    // Validate input
    if (!email || !password || !role) {
      return Response.json(
        {
          success: false,
          message: "Email, password and role are required.",
        },
        { status: 400 }
      );
    }

    // Only allow user or host
    if (role !== "user" && role !== "host") {
      return Response.json(
        {
          success: false,
          message: "Invalid login type.",
        },
        { status: 400 }
      );
    }

    // Select model according to role
    const Model = role === "host" ? HostModel : UserModel;

    // Find account
    const account = await Model.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!account) {
      return Response.json(
        {
          success: false,
          message:
            role === "host"
              ? "Host account not found."
              : "User account not found.",
        },
        { status: 404 }
      );
    }

    

    // Check password
    const passwordMatch = await bcrypt.compare(
      password,
      account.password
    );

    if (!passwordMatch) {
      return Response.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        { status: 401 }
      );
    }

    // Remove password before sending response
    const accountData = account.toObject();
    delete accountData.password;

    return Response.json(
      {
        success: true,
        message:
          role === "host"
            ? "Host login successful."
            : "User login successful.",

        user: {
          ...accountData,
          role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);

    return Response.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
          }
