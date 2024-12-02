import { FC } from "react";

interface TabsProps {
  tabs: string[];
  activeTab?: string;
  onTabClick?: (tab: string) => void; // Optional callback for tab clicks
}

const Tabs: FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="pb-6">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <a
            key={tab}
            className={`py-1.5 px-6 text-[#fff] rounded-lg cursor-pointer transition-colors duration-200 text-sm hover:opacity-80 ${
              activeTab === tab ? "bg-accent" : "bg-secondary"
            }`}
            onClick={() => onTabClick && onTabClick(tab)}
          >
            {tab}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
