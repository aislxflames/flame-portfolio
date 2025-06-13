"use client";
import ContentCard from "./ContentCard";
import CreatePopup from "./CreatePopup"
import { useEffect, useState } from "react";

const getProjects = async () => {
  try {
    const res = await fetch('/api/projects', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

const ProjectMenu = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      if (data) {
        setProjects(data);
      }
    };
    fetchProjects();
  }, []);
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="flex justify-center items-center h-full w-full">
      <CreatePopup />
      <div className="bg-white/10 backdrop-blur-2xl w-[40em] text-[16px] h-[30em] rounded-xl flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold text-white mb-4">Projects</h1>
        <p className="text-sm text-gray-300 mb-6">Here you can showcase your projects.</p>
        <button
          onClick={() => { setShowPopup(true) }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Add New Project
        </button>
        <div className="flex flex-col gap-5 overflow-y-scroll scroll h-[50vh] mt-4">
          {projects ? projects.map((p) => (
            <ContentCard
              id={p._id}
              key={p._id}
              title={p.title || "Untitled Project"}
              description={p.content || "No description available"}
              image={p.image}
              type="projects"
            />
          )): 'No projects available'}

        </div>
      </div>
      <CreatePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}

export default ProjectMenu
