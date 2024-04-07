import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const[open,setOpen]=useState(true);
  const cartitem = useSelector((store) => store.cart.items);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setOpen(!open)
  };

  return (
    <nav className=" z-50 flex justify-between items-center ">
      <div className="w-20 py-5 font-bold text-3xl px-10">
        <Link to="/">
          <span className="text-[#1C1572]">AwsmFoodz</span>
          
        </Link>
      </div>
      <div>
        <ul className="hidden md:flex items-center space-x-16 px-64">
          <li>
            <Link
              to="/"
              className="hover:text-color-green ease-in duration-200 text-xl  font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-color-green ease-in duration-200 text-xl font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-color-green ease-in duration-200 text-xl font-semibold"
            >
              {" "}
              <FaShoppingCart/>-{cartitem.length}
            </Link>
          </li>
        </ul>
      </div>
      {/* Short Screen */}
      <div
        id="hamburger"
        className="md:hidden cursor-pointer z-50"
        onClick={toggleModal}
      >
        <button className="bg-[#4F3F74] hover:bg-[#432c7a] text-white font-bold py-2 px-4 rounded">
          {open?(<HiMiniBars3/>):(<RxCross1/>)}
        </button>
      </div>
      <div
        id="menu"
        className={`md:hidden bg-blue-100 min-h-[100vh] right-0 top-[8%] w-full flex items-center absolute inset-0 px-10 z-50 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 py-10">
          <li>
            <Link
              to="/"
              className="hover:text-color-green ease-in duration 200 text-2xl font-serif"
              onClick={toggleModal}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="hover:text-color-green ease-in duration 200 text-2xl font-serif"
              onClick={toggleModal}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-color-green ease-in duration 200 text-2xl font-serif"
              onClick={toggleModal}
            >
              <FaShoppingCart/>-{cartitem.length}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
