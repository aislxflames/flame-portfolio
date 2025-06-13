"use client";
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const ContentCard = (props) => {
  const router = useRouter();

  const removeContent = async () => {
    const confirmed = confirm("Are you sure you want to delete this content?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/${props.type}/?id=${props.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh(); // ✅ will now execute properly
      } else {
        console.log("Failed to delete content.");
      }
    } catch (error) {
      console.error("Error while deleting:", error);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-2xl w-[37em] text-[16px] h-[5em] rounded-xl flex items-center justify-between p-8 overflow-scroll">
      <div>
        {props.title && <h1>{props.title}</h1>}
        {props.description && <p className="text-sm text-gray-300 ml-4">{props.description}</p>
        }
      </div>
      {props.image && <img src={props.image} alt="Preview" className="w-26 h-16 ml-auto rounded-lg" />}
      <div className="flex items-center ml-4 text-xl">
        <MdDeleteForever onClick={removeContent} className="text-appricon-500 cursor-pointer" />
        <MdEdit className="ml-2 text-cherry-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ContentCard;

