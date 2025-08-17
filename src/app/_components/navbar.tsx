import { Iconify } from "@/components/icon";
import { cn } from "@/utils/helper";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: "Dashboard",

      icon: "material-symbols:home-rounded",
    },
    {
      id: 2,
      title: "Listings",
      icon: "fluent:toolbox-32-regular",
    },
    {
      id: 3,
      title: "Users",
      icon: "solar:user-outline",
    },
    {
      id: 4,
      title: "Request",
      icon: "ph:article",
    },
    {
      id: 5,
      title: "Applications",
      icon: "ph:scroll",
    },
  ];

  return (
    <nav className="h-20 bg-white flex items-center border-b border-gray">
      <div className="px-2 container mx-auto flex items-center gap-8 justify-between">
        <div className="flex-1 flex items-center gap-5 justify-between">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={cn(
                "px-6 h-9 gap-2 hover_transit flex items-center justify-center text-[#3D3D3D] rounded-lg sub_text w-full",
                item.id === 1 ? "bg-[#F5F5F5] font-semibold text-black" : "hover:bg-[#F5F5F5]"
              )}
            >
              <Iconify icon={item.icon} className="text-2xl flex-none" />
              <p>{item.title}</p>
            </button>
          ))}
        </div>

        <div className="w-full max-w-xs border border-gray h-11 flex items-center px-4 py-2.5 rounded-xl bg-[#F5F5F5] gap-1.5">
          <Iconify icon="ep:search" className="flex-none" />
          <input
            className="flex-1 bg-transparent outline-none text-xs font-light font-euclid"
            placeholder="Search listings, users here..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
