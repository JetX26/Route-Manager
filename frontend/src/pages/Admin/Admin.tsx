import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import getOrgInfo from "../../utils/getOrg";
import ModalList from "../../components/List/ModalList";
import { useState } from "react";
import Modal from "../../components/Modal/Modal"; // Import the reusable Modal component

const TeamMembers = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const tabs = [
    "View Analytics",
    "Team Members",
    "Add Team Member",
    "See / Add / Edit existing Routes",
  ];

  const history = useLocation();

  // Uses the Org Id to fetch the Org data, stores it in "data" variable
  const { data, isFetched } = useQuery({
    queryKey: ["CurrentOrg"],
    queryFn: () => getOrgInfo(history.state),
  });

  // Handle different actions based on which tab is clicked
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

    switch (tab) {
      case "New Entry":
        // Open the modal for new entry

        console.log("Time tracking started.");
        break;
      case "Start":
        console.log("Time tracking started.");
        break;
      case "End":
        // Stop time tracking logic

        console.log("Time tracking started.");
        break;
      default:
        break;
    }
  };

  // Example list data matching the design from the image
  const listItems = [
    {
      columns: [
        "Ms. Jane Dane", // First Name
        "14:00", // Time
        "123 Main St", // Address
        "Dog Walking", // Task
        "No notes", // Notes or empty string for no data
        "-", // Placeholder for missing column
        "-", // Placeholder for missing column
      ],
    },
    {
      columns: [
        "Mr. John Doe",
        "16:00",
        "456 Elm St",
        "Vet Appointment",
        "Pet needs vaccine",
        "Priority",
        "-", // Placeholder for missing column
      ],
    },
    {
      columns: [
        "Ms. Alice Brown",
        "10:30",
        "789 Oak St",
        "Grooming",
        "Special shampoo",
        "-", // Placeholder for missing column
        "-", // Placeholder for missing column
      ],
    },
    {
      columns: [
        "Mr. Mark Smith",
        "12:15",
        "321 Pine St",
        "Pet Sitting",
        "Needs key pickup",
        "Regular client",
        "No notes", // All columns filled
      ],
    },
    {
      columns: [
        "Ms. Emily White",
        "18:00",
        "654 Maple Ave",
        "Training Session",
        "Aggressive dog",
        "Requires leash",
        "-", // Placeholder for missing column
      ],
    },
    // Add more mock data as needed...
  ];

  // Column headers for the list
  const headers = [
    "Name",
    "Time",
    "Address",
    "Task",
    "Additional Info",
    "Status",
    "Notes",
  ];

  if (isFetched) {
    console.log(data);
  }
  return (
    <DashboardLayout
      showTabs={true}
      showCards={false}
      headerTitle="Admin"
      tabs={tabs}
      showChart={true}
    >
      <section className="bg-secondary w-full h-full rounded-lg p-4">
        {/* Render the list component */}
        <ModalList
          items={listItems}
          title="Active Routes"
          columnsCount={7}
          headers={headers}
        />
      </section>
    </DashboardLayout>
  );
};

export default TeamMembers;
