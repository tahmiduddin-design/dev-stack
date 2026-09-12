const Navbar = () => {
  return (
    <nav className="bg-white border-2 py-3 px-8 flex justify-between items-center sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <span className="bg-[#D91B7E] text-white font-bold py-2 px-1 rounded">DS</span>
      <span className="font-bold text-1xl text-black">
          Dev<span className="text-[#D91B7E]">Stack</span>
        </span>
    </div>

    <ul className="flex gap-6 text-gray-600">
        <li className="text-[#D91B7E] font-medium cursor-pointer">Home</li>
        <li className="cursor-pointer">Technologies</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
    </ul>

    <div className="flex items-center gap-3">
        <button className="font-medium text-black">Sign In</button>
        <button className="bg-[#D91B7E] text-white px-4 py-1.5">Sign Up</button>
    </div>

    </nav>
  )
}
export default Navbar;