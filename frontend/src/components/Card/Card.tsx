import { FC } from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ title, description }) => {
  return (
    <div className="min-w-[300px] bg-secondary p-4 rounded-xl flex flex-col justify-between space-y-3">
      <h3 className="text-md font-bold">{title}</h3>
      <p className="text-xs text-gray-400 line-clamp-1">{description}</p>

      {/* Buttons / tags at the bottom */}
      <div className="flex justify-between">
        <button className="text-xs px-4 py-1 bg-neutral text-primary font-semibold hover:opacity-80 rounded-lg">
          12 Aug
        </button>
        <button className="text-xs px-4 py-1 bg-neutral text-primary font-semibold hover:opacity-80 rounded-lg">
          14:00
        </button>
        <button className="text-xs px-4 py-1 bg-neutral text-primary font-semibold hover:opacity-80 rounded-lg">
          Call
        </button>
        <button className="text-xs px-4 py-1 bg-neutral text-primary font-semibold hover:opacity-80 rounded-lg">
          Test
        </button>
      </div>
    </div>
  );
};

export default Card;
