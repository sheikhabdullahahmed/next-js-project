"use client";

type Order = {
  id: string;
  customer: string;
  date: string;
  status: "Pending" | "Completed" | "Cancelled";
  amount: string;
};

type Props = {
  orders: Order[];
  theme: string;
};

export default function RecentOrders({ orders, theme }: Props) {
  return (
    <div
      className={`p-5 rounded-xl shadow-md transition-all duration-300 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black border"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Recent Orders</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead
            className={`border-b ${
              theme === "dark"
                ? "text-gray-400 border-gray-700"
                : "text-gray-600 border-gray-200"
            }`}
          >
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
                className={`border-b transition ${
                  theme === "dark"
                    ? "border-gray-800 hover:bg-gray-900"
                    : "border-gray-200 hover:bg-gray-100"
                }`}
              >
                <td className="py-3">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs text-white ${
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