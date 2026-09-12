import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-8">
        <Banner />
      </main>
    </div>
  );
}

export default App;