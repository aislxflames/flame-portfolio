import connectDB from "@/libs/mongodb";
import Certificate from "@/models/certificate";
import { NextResponse } from "next/server";


// Put method to update certificate

export async function PUT(req, { params }) {
  const { id } = params;
  const {newImage: image} = await req.json();
  await connectDB();
  await Certificate.findByIdAndUpdate(id, { image });
  return NextResponse.json({message: "Certificate Updated"}, { status: 200 });
}

// Get method to get certificate by id

export async function GET(req, { params }) {
  const {id} = params;
  const certificate = await Certificate.findById(id);
  if (!certificate) {
    return NextResponse.json({ message: "Certificate not found" }, { status: 404 });
  }
  return NextResponse.json({certificate}, {status: 200} );
}
