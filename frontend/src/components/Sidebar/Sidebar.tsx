import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Assuming you're using React Router

const Sidebar: React.FC = () => {
  //* Use the useNavigate hook for navigating instead of the href property, navigates smoother in React Router DOM */

  // Here is the hook
  // Simply call navigate("/path") to navigate to a different path
  const navigate = useNavigate();

  const { signOut } = useAuth();

  const location = useLocation(); // Get the current location

  // Helper function to determine if the link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 p-6 flex flex-col justify-between h-[calc(100vh-73px)] fixed">
      <nav className="space-y-2">
        <a
          onClick={() => {
            navigate("/routebook");
          }}
          className="block pb-2 px-4 rounded-lg text-lg mb-5 hover:cursor-pointer"
        >
          RouteQuery
        </a>
        <a
          onClick={() => {
            navigate("/TeamMembers");
          }}
          className={`block py-2 px-4 rounded-lg hover:bg-secondary text-md hover:cursor-pointer ${
            isActive("/TeamMembers") ? "bg-accent" : ""
          }`}
        >
          Organization
        </a>
        <a
          href="/admin"
          className={`block py-2 px-4 rounded-lg hover:bg-secondary text-md ${
            isActive("/admin") ? "bg-accent" : ""
          }`}
        >
          Admin
        </a>
        <a
          href="/Profile"
          className={`block py-2 px-4 rounded-lg hover:bg-secondary text-md ${
            isActive("/Profile") ? "bg-accent" : ""
          }`}
        >
          Profile
        </a>
      </nav>

      {/* Bottom links: Settings, Privacy, and Logout */}
      <nav className="">
        <a
          onClick={() => {
            navigate("/settings");
          }}
          className={`block py-2 px-4 rounded-lg hover:bg-secondary hover:cursor-pointer ${
            isActive("/settings") ? "bg-accent" : ""
          }`}
        >
          Settings
        </a>
        <a
          onClick={() => {
            navigate("/privacy");
          }}
          className={`block py-2 px-4 rounded-lg hover:bg-secondary hover:cursor-pointer ${
            isActive("/privacy") ? "bg-accent" : ""
          }`}
        >
          Privacy Policy
        </a>
        <a
          onClick={() => {
            signOut();
          }}
          className={`block py-2 px-4 rounded-lg hover:bg-secondary hover:cursor-pointer ${
            isActive("/routebook") ? "bg-accent" : ""
          }`}
        >
          Log out
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
