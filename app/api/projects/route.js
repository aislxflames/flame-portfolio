import Project from '@/models/projects';
import { NextResponse } from 'next/server';
import connectDB from '@/libs/mongodb';

// Post method to create a new project

export async function POST(req) {
  const { title, content, image, url } = await req.json();
  await connectDB();
  await Project.create({title, content, image, url});
  return NextResponse.json({ message: 'Project created successfully' }, { status: 201 });
}

// Get method to fetch all projects

export async function GET() {
  await connectDB();
  const projects = await Project.find({});
  return NextResponse.json(projects, { status: 200 });
}

// Delete method to to remove a project by ID

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');
  await connectDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Project deleted successfully' }, { status: 200 });
}
