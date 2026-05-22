"use client";

type Stat = {
  title: string;
  value: string;
  change: string;
  data: number[];
};

function MiniChart({ data }: { data: number[] }) {
  return (
    <div className="flex items-end gap-1 h-10 mt-3">
      {data.map((val, i) => (
        <div
          key={i}
          className="bg-blue-500 w-2 rounded"
          style={{ height: `${val / 5}px` }}
        />
      ))}
    </div>
  );
}

export default function TotalRevenue({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <div key={index} className="p-4 rounded-xl shadow-md border bg-black text-white">
          <h2 className="text-gray-400 text-sm">{item.title}</h2>
          <h1 className="text-2xl font-bold mt-2">{item.value}</h1>
          <p className="text-green-500 text-sm">{item.change}</p>
          <MiniChart data={item.data} />
        </div>
      ))}
    </div>
  );
}