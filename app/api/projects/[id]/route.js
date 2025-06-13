import connectDB from "@/libs/mongodb";
import Projects from "@/models/projects";
import { NextResponse } from "next/server";

// Update project by ID

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newContent: content, newImage: image, newUrl: url} = await req.json();
  await connectDB();
  await Projects.findByIdAndUpdate(id, { title, content, image, url });
  return  NextResponse.json({ message: "Project updated successfully" }, { status: 200 });
}

// Get single project by ID

export async function GET(req, {params}){
  const {id} = params;
  const project = await Projects.findById(id);
  return NextResponse.json(project, { status: 200 });
}
