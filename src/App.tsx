import React, { Suspense, useState } from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import TechnologyList from './Components/TechnologyList';
import type { ITechnology } from './Types/technologyType';

const loadTechnologies = async (): Promise<ITechnology[]> => {
  const res = await fetch('/technologies.json');
  return await res.json();
};

const technologiesPromise = loadTechnologies();

function App() {
  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([]);

  const handleAdd = (tech: ITechnology) => {
    setSelectedStack((prev) => [...prev, tech]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-8 pb-16">
        <Banner />

        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-black">
            Explore the <span className="text-[#D91B7E]">Technologies</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Pick one technology per category to build your ideal stack.</p>
        </div>

        <Suspense fallback={<div className="py-12 text-center text-xs text-gray-400">Loading technologies...</div>}>
          <TechnologyList technologiesPromise={technologiesPromise} selectedStack={selectedStack}
          handleAdd={handleAdd}
          />
        </Suspense>
      </main>
    </div>
  );
}

export default App;