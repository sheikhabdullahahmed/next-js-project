"use client";

import React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

import { NavItem } from "@/src/types/index";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { toggleTheme } from "@/src/redux/slices/themeSlice";

interface SidebarProps {
  navigation: NavItem[];
}

export default function Sidebar({ navigation }: SidebarProps) {
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <aside className="w-52 h-screen bg-black text-white fixed left-0 top-0 p-5 flex flex-col justify-between">
      {/* Top */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

        <div className="flex flex-col gap-3">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition"
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Theme Button */}
      <button
        onClick={() => dispatch(toggleTheme())}
        className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition p-3 rounded-lg"
      >
        {theme === "dark" ? (
          <>
            <Sun size={18} />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon size={18} />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    </aside>
  );
}
