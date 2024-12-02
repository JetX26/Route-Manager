import { FC, ReactNode } from "react";
import Tabs from "../Tabs/Tabs";
import ScrollableCards from "../Card/ScrollableCards";
import Sidebar from "../Sidebar/Sidebar";
import { UserButton, useUser } from "@clerk/clerk-react";

interface DashboardLayoutProps {
  children: ReactNode;
  showTabs?: boolean;
  tabs?: string[];
  showCards?: boolean;
  cards?: Array<{ title: string; description: string }>;
  headerTitle?: string;
  showChart?: boolean;
  activeTab?: string; // Add activeTab prop here
  onTabClick?: (tab: string) => void; // Add onTabClick prop here
}

const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
  showTabs = false,
  tabs = [],
  showCards = false,
  cards = [],
  headerTitle = "",
  activeTab = "", // Default empty string if no tab is active
  showChart = false,
  onTabClick, // Optional callback for tab click
}) => {
  const { user } = useUser();

  return (
    <div className="h-screen flex flex-col bg-primary text-[#fff] pb-6 overflow-hidden">
      {/* Header */}
      <header className="w-full bg-primary border-b border-secondary">
        <div className="flex items-center gap-4 py-4 px-6">
          <UserButton />
          <div>
            <h3 className="text-md font-semibold">Hi {user?.fullName}</h3>
            <p className="text-xs text-gray-400">Your personal daily tasks</p>
          </div>
        </div>
      </header>

      {/* Main Layout Section (Sidebar + Content) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main Content (to the right of the sidebar) */}
        <div className="scrollbar-hide ml-64 flex-1 overflow-y-auto p-6 pl-0 pb-0 text-[#fff] ">
          <div className="bg-primary z-10">
            {headerTitle && (
              <h1 className="text-xl font-semibold pb-7">{headerTitle}</h1>
            )}

            {/* Tabs (conditionally rendered) */}
            {showTabs && tabs.length > 0 && (
              <Tabs
                tabs={tabs}
                activeTab={activeTab} // Pass activeTab to Tabs
                onTabClick={onTabClick} // Pass onTabClick to Tabs
              />
            )}

            {/* Admin Chart */}
            {showChart && (
              <div className="grid grid-cols-2 gap-6 pb-6">
                <div className="bg-secondary rounded-md h-40 p-4">
                  Insert Chart here
                </div>
                <div className="bg-secondary rounded-md h-40 p-4">
                  Insert Chart here
                </div>
              </div>
            )}

            {/* Cards */}
            {showCards && cards.length > 0 && <ScrollableCards cards={cards} />}
          </div>

          {/* Content */}
          <div className="h-auto">
            {/* Content (table or other scrollable children) */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
