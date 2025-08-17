"use client";
import { colors } from "@/utils/constants";
import { Menu } from "@mantine/core";
import {
  Lock,
  LogoutCurve,
  People,
  Personalcard,
  ShieldTick,
} from "iconsax-reactjs";
import React from "react";

const Avatar = () => {
  const navItems = [
    {
      id: 1,
      title: "Teams",
      icon: <People size="24" color="#191919" variant="Bold" />,
    },
    {
      id: 2,
      title: "Contact Persons",
      icon: <Personalcard size="24" color="#191919" variant="Bold" />,
    },
    {
      id: 3,
      title: "Change Password",
      icon: <Lock size="24" color="#191919" variant="Bold" />,
    },
    {
      id: 4,
      title: "2-Factor Authentication",
      icon: <ShieldTick size="24" color="#191919" variant="Bold" />,
    },
    {
      id: 5,
      title: "Logout",
      icon: <LogoutCurve size="24" color="#f04438" />,
    },
  ];

  return (
    <Menu
      withArrow
      shadow="md"
      classNames={{
        dropdown: "font-euclid",
      }}
      styles={{
        dropdown: {
          padding: "12px",
          borderRadius: "12px",
          width: "320px",
        },
      }}
    >
      <Menu.Target>
        <button className="h-10 w-10 rounded-full font-medium font-euclid text-black text-xl bg-white flex items-center justify-center">
          D
        </button>
      </Menu.Target>

      <Menu.Dropdown className="space-y-3">
        <div className="bg-gray p-3 flex gap-3 items-center rounded-xl">
          <div className="h-12 w-12 flex items-center justify-center bg-green text-white rounded-full text-2xl font-medium">
            D
          </div>
          <div>
            <h4 className="text-sm font-bold">Dylan Frank</h4>
            <p className="text-xs text-gray-500">dylan96@mail.com</p>
          </div>
        </div>

        {navItems.map((item) => (
          <Menu.Item
            style={{
              borderBottom: item.id !== 5 ? "1px solid" : "",
              borderColor: item.id === 5 ? "" : colors.gray,
            }}
            leftSection={item.icon}
            key={item.id}
            color={item.id === 5 ? colors.danger : "#191919"}
            className="h-12 font-medium mid_text gap-2 border-b rounded-none"
          >
            {item.title}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default Avatar;
