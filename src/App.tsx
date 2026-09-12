import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import TechnologyList from "./Components/TechnologyList";
import YourStack from "./Components/YourStack";
import Footer from "./Components/Footer";

import type { ITechnology } from "./Types/technologyType";

import "react-toastify/dist/ReactToastify.css";


const loadTechnologies = async (): Promise<ITechnology[]> => {
  try {
    const response = await fetch("/technologies.json");

    if (!response.ok) {
      throw new Error("Failed to load technologies");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};


const technologiesPromise = loadTechnologies();


function App() {
  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([]);


  const addTechnology = (technology: ITechnology) => {
    const alreadyExists = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already added`);
      return;
    }

    setSelectedStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(`${technology.name} added`);
  };


  const removeTechnology = (id: string, name: string) => {
    setSelectedStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== id)
    );

    toast.info(`${name} removed`);
  };


  const clearStack = () => {
    setSelectedStack([]);
    toast.error("Stack cleared");
  };


  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-8">

        <Banner />


        <section className="mb-6">
          <h2 className="text-2xl font-extrabold text-black">
            Explore the{" "}
            <span className="text-[#D91B7E]">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </section>


        <div className="grid grid-cols-4 gap-6 items-start pb-16">

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
                handleAdd={addTechnology}
              />

            </Suspense>

          </div>


          <aside className="col-span-1 sticky top-20">

            <YourStack
              selectedStack={selectedStack}
              handleRemove={removeTechnology}
              handleRemoveAll={clearStack}
            />

          </aside>

        </div>

      </main>


      <Footer />


      <ToastContainer
        position="top-right"
        autoClose={1500}
      />

    </div>
  );
}


export default App;