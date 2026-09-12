import bannerStack from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="flex items-center justify-between gap-8 py-12">
         <div className="max-w-md">
            <h1 className="text-4xl font-extrabold text-black leading-tight mb-3">
            Build Your Ideal <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#D91B7E] to-[#7928CA]">
            Development Stack
          </span>
            </h1>

        <p className="text-xs text-gray-500 mb-5 leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-3">
             <button className="bg-[#FF6B00] text-white text-xs font-semibold px-4 py-2 rounded">Explore Technologies
              </button>
              <button className="border border-gray-300 text-black text-xs font-semibold px-4 py-2 rounded bg-white">Learn More
              </button>

        </div>

      </div>


      <img
        src={bannerStack}
        alt=""
        className="w-80 h-64 object-contain rounded-xl"
      />
     </div>
  );
};

export default Banner;