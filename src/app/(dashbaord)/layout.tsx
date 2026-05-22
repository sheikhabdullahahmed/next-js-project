"use client";

import React from "react";
import Sidebar from "@/src/components/sidebar/index";
import { ChartColumnDecreasing, ChartNoAxesCombined , LayoutDashboard  } from "lucide-react";
import { ShoppingCart } from 'lucide-react';



import { NavItem } from "@/src/types/index";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems: NavItem[] = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
    },
    {
      name: "Analytics",
      icon: ChartColumnDecreasing,
      href: "/analaytic",
    },
    {
      name: "E-Commerce",
      icon: ShoppingCart,
      href: "/e-commerce",
    },
    {
      name: "Charts",
      icon: ChartNoAxesCombined,
      href: "/charts",
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar navigation={menuItems} />

      {/* Main Content */}
      <main className="flex-1 lg:ml-52 p-3 overflow-y-auto">{children}</main>
    </div>
  );
}
