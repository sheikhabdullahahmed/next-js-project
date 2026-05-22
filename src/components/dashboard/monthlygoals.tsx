"use client";

type Props = {
  data: { title: string; value: number }[];
};

export default function MonthlyGoals({ data }: Props) {
  return (
    <div className="bg-black text-white p-5 rounded-xl">
      <h2 className="text-xl font-bold mb-5">Monthly Goals</h2>

      <div className="grid md:grid-cols-3 gap-5">
        {data.map((item, i) => (
          <div key={i}>
            <h3 className="text-sm text-gray-400">{item.title}</h3>

            <div className="w-full bg-gray-800 h-2 rounded mt-2">
              <div
                className="h-2 bg-teal-500 rounded"
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