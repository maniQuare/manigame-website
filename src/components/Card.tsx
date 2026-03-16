import React from "react";

interface CardProps {
  title: string;
  value: string | number;
  subValue?: string;
}

const Card: React.FC<CardProps> = ({ title, value, subValue }) => {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>

      <div className="cardBody">
        <h2>{value}</h2>
        {subValue && <p>{subValue}</p>}
      </div>
    </div>
  );
};

export default Card;