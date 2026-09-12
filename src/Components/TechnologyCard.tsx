import type { ITechnology } from "../Types/technologyType";

interface TechnologyCardProps {
  tech: ITechnology;
  handleAdd: (tech: ITechnology) => void;
  isSelected: boolean;
}

const TechnologyCard = ({tech,handleAdd,isSelected,}: TechnologyCardProps) => {
  return (
    <div className="border border-gray-100 shadow-sm rounded-xl p-4 flex flex-col justify-between bg-white">
      <div>
        <div className="flex justify-between items-center mb-3">
         <img
            src={tech.icon}
            alt={tech.name}
            className="w-6 h-6 object-contain"
          />

          <span className="text-[10px] text-sky-500 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-full">
            {tech.badge}
          </span>

        </div>
          <h3 className="font-bold text-sm text-black">
          {tech.name}
        </h3>

        <p className="text-[11px] text-gray-400 my-2 leading-normal">
          {tech.description}
        </p>

         <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-4">
             <span className="bg-gray-50 px-1.5 py-0.5 rounded">
            {tech.category}
        </span>

        <span className="bg-gray-50 px-1.5 py-0.5 rounded">
            {tech.difficulty}
        </span>

        <span>
            ★ {tech.rating}
        </span>
       </div>
       </div>
     <button onClick={() => handleAdd(tech)} disabled={isSelected}
        className={`w-full py-1.5 rounded text-xs font-medium ${
          isSelected
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-black text-white"
        }`}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;