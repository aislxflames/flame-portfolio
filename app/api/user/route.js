import connectDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req){
  const { name , email} = req.json();
  await connectDB();
  await User.create({
    name,
    email
  });
  return NextResponse.json({message: "User Registerd"}, { status: 201 });
}
