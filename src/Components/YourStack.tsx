import React from 'react';
import StackItem from './StackItem';
import type { ITechnology } from '../Types/technologyType';

interface StackProps {
  selectedStack: ITechnology[];
  handleRemove: (id: string, name: string) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({ selectedStack, handleRemove, handleRemoveAll }: StackProps) => {
  return (
    <div className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
      <h3 className="font-bold text-sm text-black">Your Stack</h3>
      <p className="text-[11px] text-gray-400 mb-3">
        {selectedStack.length > 0
          ? `${selectedStack.length} Technology Selected`
          : 'No technologies selected yet.'}
      </p>

      {selectedStack.length === 0 ? (
        <div className="border border-dashed border-gray-200 p-6 text-center text-xs text-gray-400 rounded">
          Your stack is empty.
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {selectedStack.map((item) => (
            <StackItem
              key={item.id}
              item={item}
              handleRemove={handleRemove}
            />
          ))}

          <button
            onClick={handleRemoveAll}
            className="border border-red-200 text-red-500 text-xs py-1.5 rounded mt-2 hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;