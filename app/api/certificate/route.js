import connectDB from "@/libs/mongodb";
import Certificate from "@/models/certificate";
import { NextResponse } from "next/server";


// Post method to create a new certificate

export async function POST(req){
  const {image} = await req.json();
  await connectDB();
  await Certificate.create({image});
  return NextResponse.json({ message: 'Certificate created successfully' }, { status: 201 });
}

// Get method to fetch all certificates

export async function GET() {
  await connectDB();
  const certificates = await Certificate.find({});
  return NextResponse.json(certificates, { status: 200 });
}

// Delete method to remove a certificate by ID

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');
  await connectDB();
  await Certificate.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Certificate deleted successfully' }, { status: 200 });
}
