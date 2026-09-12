import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import type { ITechnology } from "../Types/technologyType";

interface TechnologyListProps {
  technologiesPromise: Promise<ITechnology[]>;
  selectedStack: ITechnology[];
  handleAdd: (tech: ITechnology) => void;
}

const TechnologyList = ({technologiesPromise,selectedStack,handleAdd}: TechnologyListProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div className="grid grid-cols-3 gap-3">

      {technologies.map((tech) => {
        const isSelected = selectedStack.some(
          (item) => item.id === tech.id
        );

        return (
          <TechnologyCard key={tech.id} tech={tech} handleAdd={handleAdd} isSelected={isSelected} />
        );
      })}

    </div>
  );
};

export default TechnologyList;