"use client"
import { signOut } from "next-auth/react"
import { useState } from "react";
import ProjectMenu from "./ProjectMenu";
import CertificateMenu from "./CertificateMenu";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("projects");
  return (
    <div className="flex justify-around px-20 gap-30">
      <div className="bg-black/30 backdrop-blur-2xl h-[60%] w-[12em] rounded-lg flex flex-col items-center gap-5 p-5 justify-between">
        <button className="bg-cherry-500 py-2 px-4 rounded-xl font-bold hover:scale-105 hover:bg-appricon-500 transition-all duration-300" onClick={() => { signOut() }}>Logout</button>
        <ul className="text-white flex flex-col text-center gap-3 [&>li]:cursor-pointer">
          <li
            onClick={() => { setActiveTab("projects") }}
            className={`py-2 px-6 rounded-xl hover:scale-105 hover:bg-red-800/60 transition-all duration-300 ${activeTab === 'projects' ? 'bg-red-800' : 'bg-slate-800/40'}`}
          >
            Projects
          </li>
          <li
            onClick={() => { setActiveTab("certificate") }}
            className={`py-2 px-6 rounded-xl hover:scale-105 hover:bg-red-800/60 transition-all duration-300 ${activeTab === 'certificate' ? 'bg-red-800' : 'bg-slate-800/40'}`}
          >
            Certificate
          </li>
          <li
            onClick={() => { setActiveTab("codestack") }}
            className={`py-2 px-6 rounded-xl hover:scale-105 hover:bg-red-800/60 transition-all duration-300 ${activeTab === 'codestack' ? 'bg-red-800' : 'bg-slate-800/40'}`}
          >
            Codestack
          </li>
        </ul>
      </div>
      {activeTab === 'projects' && <ProjectMenu/>}
      {activeTab === 'certificate' && <CertificateMenu/>}
    </div>
  )
}

export default Sidebar
