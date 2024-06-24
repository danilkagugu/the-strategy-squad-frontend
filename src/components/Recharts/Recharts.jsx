import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Recharts = ({ dayOfMouth, percentWater }) => {
  const data = dayOfMouth.map((day) => {
    return [
      {
        name: day,
        percent: percentWater,
      },
    ];
  });
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="percent"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Recharts;
