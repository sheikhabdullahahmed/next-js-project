"use client";

export default function OverviewChart({ data }: { data: number[] }) {
  return (
    <div className="bg-black text-white p-5 rounded-xl">
      <h2 className="text-xl font-bold">Overview</h2>
      <p className="text-gray-400 text-sm mb-5">
        Monthly performance for the current year
      </p>

      <div className="flex items-end gap-2 h-60">
        {data.map((val, i) => (
          <div
            key={i}
            className="bg-pink-500 w-3 rounded"
            style={{ height: `${val / 250}px` }}
          />
        ))}
      </div>
    </div>
  );
}