"use client";
import ContentCard from "./ContentCard";
import CreatePopup from "./CreateCertificatePopup.jsx"
import { useEffect, useState } from "react";

const getProjects = async () => {
  try {
    const res = await fetch('/api/certificate', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

const CertificateMenu = () => {
  const [certificate, setCertificate] = useState([]);
  useEffect(() => {
    const fetchCertificate = async () => {
      const data = await getProjects();
      if (data) {
        setCertificate(data);
      }
    };
    fetchCertificate();
  }, []);
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="flex justify-center items-center h-full w-full">
      <CreatePopup />
      <div className="bg-white/10 backdrop-blur-2xl w-[40em] text-[16px] h-[30em] rounded-xl flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold text-white mb-4">Certificate</h1>
        <p className="text-sm text-gray-300 mb-6">Here you can showcase your certificates.</p>
        <button
          onClick={() => { setShowPopup(true) }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Add new Certificate
        </button>
        <div className="flex flex-col gap-5 overflow-y-scroll scroll h-[50vh] mt-4">
          {certificate ? certificate.map((c) => (
            <ContentCard
              id={c._id}
              key={c._id}
              image={c.image}
              type="certificate"
            />
          )): 'No Certificate available'}

        </div>
      </div>
      <CreatePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}

export default CertificateMenu 
