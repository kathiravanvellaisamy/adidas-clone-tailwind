import { RiMenu3Fill } from "react-icons/ri";
import { HiUser } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      text: "Men",
    },
    {
      id: 2,
      text: "Women",
    },
    {
      id: 3,
      text: "Kids",
    },
    {
      id: 4,
      text: "Sports",
    },
    {
      id: 5,
      text: "Brands",
    },
    {
      id: 6,
      text: "Life Style",
    },
    {
      id: 7,
      text: "Outlets",
    },
  ];
  return (
    <header className="w-full flex flex-col">
      <div className="w-full bg-black py-1">
        <h3 className="text-md text-white text-center my-1">
          Free Delivery, Easy return
        </h3>
      </div>
      <div className="hidden md:flex justify-end items-center gap-5 px-5 py-1">
        <a href="" className="text-xs hover:underline">
          help
        </a>
        <a href="" className="text-xs hover:underline">
          orders & returns
        </a>
        <a href="" className="text-xs hover:underline">
          sign in
        </a>
        <a href="" className="text-xs hover:underline">
          sign up
        </a>
      </div>
      <div className="flex items-center justify-between px-4 md:px-8 py-3 border-b border-slate-200">
        <div className="block md:hidden">
          <RiMenu3Fill size={24} />
        </div>
        <div>
          <img
            src="src/assets/images/logo.png"
            className="w-16 md:w-18 cursor-pointer"
          />
        </div>
        <div className="hidden md:flex items-center gap-5">
          {menuItems.map((menutItem, index) => (
            <a key={menutItem.id} href="#" className="menu-items text-sm">
              {menutItem.text}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <input
            type="search"
            className="hidden md:block bg-slate-200 text-slate-600 text-md px-2 py-1 focus:outline-slate-500 "
            placeholder="Search"
          />
          <HiUser size={24} className="cursor-pointer" />
          <FaRegHeart size={24} className="cursor-pointer" />
          <FaBagShopping size={24} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
