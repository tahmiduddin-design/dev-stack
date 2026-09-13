import { Suspense, useState } from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import TechnologyList from './Components/TechnologyList';
import YourStack from './Components/YourStack';
import type { ITechnology } from './types/technologyType';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';

const loadTechnologies = async (): Promise<ITechnology[]> => {
  const res = await fetch('/technologies.json');
  return await res.json();
};

const technologiesPromise = loadTechnologies();

function App() {
  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([]);

  const handleAdd = (tech: ITechnology) => {
    if (selectedStack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} already added!`);
      return;
    }
    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added!`);
  };

  const handleRemove = (id: string, name: string) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`${name} removed.`);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('Cleared stack!');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="max-w-6xl mx-auto px-8 flex-1 w-full pb-16">
        <Banner />

        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-black">
            Explore the <span className="text-[#D91B7E]">Technologies</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 items-start">
          <div className="col-span-3">
            <Suspense
              fallback={
                <div className="py-12 text-center text-xs text-gray-400 font-medium">
                  Loading technologies...
                </div>
              }
            >
              <TechnologyList
                technologiesPromise={technologiesPromise}
                selectedStack={selectedStack}
                handleAdd={handleAdd}
              />
            </Suspense>
          </div>

          <aside className="col-span-1 sticky top-20">
            <YourStack
              selectedStack={selectedStack}
              handleRemove={handleRemove}
              handleRemoveAll={handleRemoveAll}
            />
          </aside>
        </div>
      </main>
      <Footer />

      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
}

export default App;