const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-16 py-10 px-8 max-w-6xl mx-auto text-xs text-gray-500 w-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#D91B7E] text-white font-bold px-1.5 py-0.5 rounded text-[10px]">
              DS
            </span>

            <span className="font-bold text-black text-sm">
              Dev<span className="text-[#D91B7E]">Stack</span>
            </span>
          </div>

          <p className="text-gray-400 max-w-xs">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="font-semibold text-black mb-2">
              PRODUCT
            </h4>

            <ul className="space-y-1 text-gray-400">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">
              COMPANY
            </h4>

            <ul className="space-y-1 text-gray-400">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-2">
              LEGAL
            </h4>

            <ul className="space-y-1 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-50 pt-4 flex justify-between text-gray-400">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-4">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;