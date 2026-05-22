"use client";

import React from "react";

type Order = {
  id: string;
  customer: string;
  date: string;
  status: "Pending" | "Completed" | "Cancelled";
  amount: string;
};

type Props = {
  orders: Order[];
};

export default function RecentOrders({ orders }: Props) {
  return (
    <div className="bg-black text-white p-5 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Recent Orders</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-gray-700">
            <tr>
              <th className="text-left py-2">Order ID</th>
              <th className="text-left py-2">Customer</th>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-800 hover:bg-gray-900 transition"
              >
                <td className="py-3">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      order.status === "Completed"
                        ? "bg-green-600"
                        : order.status === "Pending"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="font-semibold">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
