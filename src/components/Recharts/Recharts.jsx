import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  Dot,
} from "recharts";

import css from "./Recharts.module.css";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={css.boxRecharts}>
        <p>{`${payload[0].value} ml`}</p>
      </div>
    );
  }

  return null;
};

const CustomDot = (props) => {
  const { cx, cy } = props;

  return (
    <Dot
      {...props}
      cx={cx}
      cy={cy}
      r={5}
      stroke="white"
      strokeWidth={2}
      fill="#ffffff"
      onMouseOver={() => console.log("hover")}
    />
  );
};
const tics = (water) => {
  const ticks = [];
  for (let i = 0; i <= water; i += 500) {
    ticks.push(i);
  }
  return ticks;
};
const Recharts = ({ data }) => {
  const { waterNorm } = useSelector(selectUserData);

  const maxTics = tics(waterNorm);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#80e27e" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#80e27e" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, waterNorm]} ticks={maxTics} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#80e27e"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Line type="monotone" dataKey="value" stroke="#80e27e" />
        {data.map((entry, index) => (
          <CustomDot
            key={`dot-${index}`}
            cx={entry.date}
            cy={(entry.value / waterNorm) * 400}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Recharts;
