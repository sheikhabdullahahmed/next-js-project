"use client";

type Props = {
  data: { label: string; value: number }[];
};

export default function TrafficSources({ data }: Props) {
  return (
    <div className="bg-black text-white p-5 rounded-xl">
      <h2 className="text-xl font-bold">Traffic Sources</h2>
      <p className="text-gray-400 text-sm mb-5">
        Where your visitors come from
      </p>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>

            <div className="w-full bg-gray-800 h-2 rounded">
              <div
                className="h-2 bg-pink-500 rounded"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}