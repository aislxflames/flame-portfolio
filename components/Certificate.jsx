"use client";

import { useEffect, useState } from "react";
import CertificateCard from "./CertificateCard";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);

  const getCertificate = async () => {
    try {
      const res = await fetch("/api/certificate");
      if (!res.ok) {
        console.error("Network response was not ok");
        return;
      }
      const data = await res.json(); // Expecting an array of { _id, image, ... }
      setCertificates(data);
    } catch (error) {
      console.error("Certificate fetch error: ", error);
    }
  };

  useEffect(() => {
    getCertificate();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 h-[50vh] overflow-y-auto">
      {certificates.map((cert) => (
        <CertificateCard key={cert._id} image={cert.image} />
      ))}
    </div>
  );
};

export default Certificate;


