const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2">
          {/* <h2 className="text-xl font-bold text-white mb-4">MOVIEFLIX</h2> */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 cursor-pointer"
          >
            MOVIE<span className="text-white">FLIX</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            The ultimate destination for cinema lovers. Explore millions of
            movies and TV shows with real-time updates.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
            <li className="hover:text-blue-400 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">API Source</h3>
          <p className="text-xs italic">The Movie Database (TMDB)</p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs">
        © {new Date().getFullYear()} MovieFlix by official-ahmad. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
