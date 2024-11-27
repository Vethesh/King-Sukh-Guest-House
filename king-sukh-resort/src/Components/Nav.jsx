import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Font from "../Font";
import AboutUs from "./About";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [show, setShow] = useState({
    home: false,
    about: false,
    service: false,
    rooms: false,
    review: false,
  });
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <div className="flex items-center flex-1">
          <span className="text-3x1 font-bold text-white ml-3 -mt-12">
            Kingsukh Guest House
          </span>
        </div>
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="rooms">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Rooms
            </li>
          </Link>
          <Link spy={true} smooth={true} to="gallery">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Gallery
            </li>
          </Link>
          <Link spy={true} smooth={true} to="contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <>

      <nav className="bg-slate-900">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
            <span className="text-3x1 font-bold">Kingsukh Guest House</span>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <Link spy={true} smooth={true} to="home">
                  <li
                    className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"
                
                  >
                    Home
                  </li>
                </Link>
                <Link spy={true} smooth={true} to="about">
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    About
                  </li>
                </Link>
                <Link spy={true} smooth={true} to="services">
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    Services
                  </li>
                </Link>
                <Link spy={true} smooth={true} to="rooms">
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    Rooms
                  </li>
                </Link>
                <Link spy={true} smooth={true} to="gallery">
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    Gallery
                  </li>
                </Link>
                <Link spy={true} smooth={true} to="contact">
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div>
            {click && (
              <>
                <Font click={false} />
                {content}
              </>
            )}
          </div>

          <button
            className={`block sm:hidden transition z-50 absolute top-6 right-5`}
            onClick={handleClick}
          >
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
      <Font click={true} />
    </>
  );
};

export default Nav;
