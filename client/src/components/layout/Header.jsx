import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/data";
const Header = () => {
  const [isMobile,setIsMobile] = useState(false);
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50 py-2" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Logo</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className=" hidden md:flex items-center gap-8 ">
            {navLinks.map((item,index) => (
              <Link
                key={index}
                to={item.url}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={()=>setIsMobile(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed h-dvh w-full inset-0 z-50 bg-white shadow-lg transition-all
         duration-300 translate-x-full ${isMobile ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between  items-center p-4">
          <p>Welomce to our clinic</p>
          <X className="cursor-pointer" onClick={()=>setIsMobile(false)}/>
        </div>
        <div className="px-2 ">
          {navLinks.map((item,index)=>(
            <Link to={item.url} key={index} className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
