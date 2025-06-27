"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      className="grid md:grid-cols-3 gap-4"
    >
      {projects.map((p) => (
        <motion.div key={p._id} variants={cardVariants}>
          <Card
            title={p.title || "Untitled"}
            description={p.content || "No description"}
            previewImg={p.image || "/test.png"}
            url={p.url}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;

