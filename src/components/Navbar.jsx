import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

function Navbar() {
  const [banner, setBanner] = useState(true);

  const navItems = [
    {
      icon: <PermIdentityOutlinedIcon />,
      link: "",
    },
    {
      icon: <SearchOutlinedIcon />,
      link: "",
    },
    {
      icon: <FavoriteBorderOutlinedIcon />,
      link: "",
    },
    {
      icon: <ShoppingCartOutlinedIcon />,
      link: "",
    },
    {
      icon: <CameraAltOutlinedIcon />,
      link: "",
    },
  ];

  return (
    <div className=" fixed top-0 w-screen border-b z-50 bg-white">
      {banner ? (
        <div className=" bg-[#970000] relative font-medium p-2 tracking-wider text-center">
          <p className=" text-white text-xs uppercase">
            25% OFF ON OR ABOVE 2599/- SITEWIDE{" "}
            <span className=" font-light underline">USe code :Sleigh</span>
          </p>
          <button
            onClick={() => setBanner(false)}
            className="text-white absolute right-4 top-0"
          >
            <CloseIcon fontSize="inherit" />
          </button>
        </div>
      ) : (
        <div />
      )}

      <div className=" flex items-center w-full  justify-between py-2 max-w-7xl mx-auto">
        <div className=" ">
          <MenuIcon />
        </div>
        <div>
          <img
            className=" max-w-[465px] w-48"
            src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547"
          />
        </div>
        <div className=" flex space-x-4 items-center">
            {navItems.map((item ,index) => <a href={item.link} key={index}>{item.icon}</a>)}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
