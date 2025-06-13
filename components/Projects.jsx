"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects', { cache: 'no-store' });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json(); // ✅ fixed: 'response' ➜ 'res'
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects(); 
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid md:grid-cols-3 rounded-xl gap-3 h-[50vh]">
      {projects.map((p) => (
        <Card
          key={p._id}
          title={p.title || "Untitled Project"}
          description={p.content || "No description provided."}
          previewImg={p.image || "/test.png"}
          url={p.url}
        />
      ))}
    </div>
  );
};

export default Projects;

