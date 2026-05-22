"use client";

type Props = {
  data: number[];
  theme: string;
};

export default function OverviewChart({ data, theme }: Props) {
  return (
    <div
      className={`p-5 rounded-xl transition-all duration-300 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black border"
      }`}
    >
      <h2 className="text-xl font-bold">Overview</h2>

      <p
        className={`text-sm mb-5 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Monthly performance for the current year
      </p>

      <div className="flex items-end gap-2 h-60">
        {data.map((val, i) => (
          <div
            key={i}
            className={`w-3 rounded ${
              theme === "dark" ? "bg-pink-500" : "bg-blue-500"
            }`}
            style={{ height: `${val / 250}px` }}
          />
        ))}
      </div>
    </div>
  );
}