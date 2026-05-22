"use client";

type Props = {
  data: { label: string; value: number }[];
  theme: string;
};

export default function TrafficSources({ data, theme }: Props) {
  return (
    <div
      className={`p-5 rounded-xl transition-all duration-300 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black border"
      }`}
    >
      <h2 className="text-xl font-bold">Traffic Sources</h2>

      <p
        className={`text-sm mb-5 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Where your visitors come from
      </p>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>

            <div
              className={`w-full h-2 rounded ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <div
                className={`h-2 rounded ${
                  theme === "dark" ? "bg-pink-500" : "bg-blue-500"
                }`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}