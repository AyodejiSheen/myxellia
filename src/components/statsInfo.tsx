import React from "react";

interface Props {
  title: string;
  value: string;
}
const StatsInfo = ({ title, value }: Props) => {
  return (
    <div className="space-y-2">
      <p className="text-[#525252] font-medium sub_text">{title}</p>
      <h1 className="text-2xl font-semibold">{value}</h1>
    </div>
  );
};

export default StatsInfo;
