import type { ITechnology } from "../types/technologyType";

interface StackItemProps {
  item: ITechnology;
  handleRemove: (id: string, name: string) => void;
}

const StackItem = ({ item, handleRemove }: StackItemProps) => {
  return (
    <div className="flex justify-between items-center p-2 border border-gray-100 rounded bg-white">
     <div className="flex items-center gap-2">
        <img
          src={item.icon}
          alt={item.name}
          className="w-4 h-4 object-contain"
        />
        <span className="text-xs font-medium text-black">
          {item.name}
        </span>

       </div>

        <button
        onClick={() => handleRemove(item.id, item.name)}
        className="text-gray-400 hover:text-black text-xs"
      >
        ✕
      </button>

    </div>
  );
};

export default StackItem;