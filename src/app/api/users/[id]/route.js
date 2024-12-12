import connectMongoDB from "@/db/config";
import Users from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();

    await connectMongoDB(); // Connect to MongoDB
    await Users.findByIdAndUpdate(id, { title, description }); // Update user by ID

    return NextResponse.json({ message: "Users updated" }, { status: 200 }); // Respond with success message and 200 status code
  } catch (error) {
    console.error("Error updating users:", error);
    return NextResponse.json(
      { message: "Error updating users" },
      { status: 500 }
    ); // Respond with error message and 500 status code
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB(); // Connect to MongoDB
    const users = await Users.findOne({ _id: id }); // Find the user by ID
    if (!users) {
      return NextResponse.json({ message: "User not found" }, { status: 404 }); // Respond with 404 status code if user not found
    }
    return NextResponse.json({ users }, { status: 200 }); // Respond with user and 200 status code
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Error fetching users" },
      { status: 500 }
    ); // Respond with error message and 500 status code
  }
}
