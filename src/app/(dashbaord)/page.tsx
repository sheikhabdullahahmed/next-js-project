"use client";

import React, { useEffect, useState } from "react";

import TotalRevenue from "@/src/components/dashboard/total-revenc";
import OverviewChart from "@/src/components/dashboard/overviewchart";
import TrafficSources from "@/src/components/dashboard/trafficsources";
import MonthlyGoals from "@/src/components/dashboard/monthlygoals";
import RecentOrders from "@/src/components/dashboard/recentorders";

import { BreadcrumbNav } from "@/src/components/shared/BreadCrumb";

import { useAppSelector } from "@/src/redux/hooks";

export default function Page() {
  const [stats, setStats] = useState<any[]>([]);
  const [dashboard, setDashboard] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);

  // Theme from Redux
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    // stats cards
    fetch("/data/stats.json")
      .then((res) => res.json())
      .then((data) => setStats(data));

    // charts + goals + traffic
    fetch("/data/dashboard.json")
      .then((res) => res.json())
      .then((data) => setDashboard(data));

    // recent orders
    fetch("/data/orders.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  if (!dashboard || stats.length === 0 || orders.length === 0) {
    return (
      <div className="p-5 text-gray-400">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div
      className={`p-6 space-y-6 min-h-screen transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Breadcrumb */}
      <BreadcrumbNav items={[{ title: "Dashboard", href: "/" }]} />

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <p
          className={`${
            theme === "dark"
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          Welcome back, Aigars. Here’s your business summary for today.
        </p>
      </div>

      {/* 1. Stats Cards */}
      <TotalRevenue stats={stats} />

      {/* 2. Charts */}
      <div className="grid lg:grid-cols-2 gap-4">
        <OverviewChart data={dashboard.revenue} />
        <TrafficSources data={dashboard.traffic} />
      </div>

      {/* 3. Goals */}
      <MonthlyGoals data={dashboard.goals} />

      {/* 4. Recent Orders */}
      <RecentOrders orders={orders} />
    </div>
  );
}