"use client";

type Props = {
  data: { title: string; value: number }[];
  theme: string;
};

export default function MonthlyGoals({ data, theme }: Props) {
  return (
    <div
      className={`p-5 rounded-xl transition-all duration-300 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black border"
      }`}
    >
      <h2 className="text-xl font-bold mb-5">Monthly Goals</h2>

      <div className="grid md:grid-cols-3 gap-5">
        {data.map((item, i) => (
          <div key={i}>
            <h3
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {item.title}
            </h3>

            <div
              className={`w-full h-2 rounded mt-2 ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <div
                className={`h-2 rounded ${
                  theme === "dark" ? "bg-teal-500" : "bg-green-500"
                }`}
                style={{ width: `${item.value}%` }}
              />
            </div>

            <p className="text-sm mt-1">{item.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}