"use client"

import { useState } from "react";

const CreatePopup = ({ isOpen, onClose }) => {
  const [image, setImage] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const res = await fetch('/api/certificate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image }),
      });
      if (!res.ok) {
        throw new Error("Failed to create certificate");
      }
      const data = await res.json();
      console.log("Certificate created successfully:", data);
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project. Please try again.");
    }

    console.log("Certificate Created:", { image });
    onClose(); // Close popup
  };

  const handleCancel = () => {
    onClose(); // Close popup
  };

  if (!isOpen) return null;

  return (
    <div className="flex flex-col absolute justify-center items-center h-[60vh] w-[60vw] z-40 bg-white/10 backdrop-blur-2xl rounded-xl p-8">
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Enter project image URL"
        className="w-full p-4 mb-4 bg-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      <div className="flex justify-center gap-10 w-full">
        <button onClick={handleCreate} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
        <button onClick={handleCancel} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreatePopup;

