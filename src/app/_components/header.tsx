"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Avatar from "./avatar";
import { MessageNotif, NotificationBing } from "iconsax-reactjs";
import Budget from "@/components/modals/budget";
import CalendarModal from "@/components/modals/calendar";

const Header = () => {
  return (
    <header className="h-[82px] flex items-center bg-black">
      <div className="px-2 container mx-auto flex items-center justify-between gap-10">
        <Link href={"#"} className="block">
          <Image
            src={"/logo.svg"}
            alt="Myxellia-Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full"
          />
        </Link>

        <div className="flex items-center gap-6 relative">
          <NotificationBing
            size={32}
            variant="Bold"
            className="text-white cursor-pointer"
          />
          <Budget />
          <CalendarModal />
          <MessageNotif
            size="32"
            className="text-white cursor-pointer"
            variant="Bold"
          />
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
