import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import getOrgInfo from "../../utils/getOrg";
import ModalList from "../../components/List/ModalList";

const TeamMembers = () => {
  const history = useLocation();

  // Uses the Org Id to fetch the Org data, stores it in "data" variable
  const { data, isFetched } = useQuery({
    queryKey: ["CurrentOrg"],
    queryFn: () => getOrgInfo(history.state),
  });

  // Example card data
  const cards = [
    {
      title: "Ms. Jane Dane",
      description: "Doesn't have a dog, Full service, Street123, 8454 CA",
    },
    {
      title: "Ms. John Doe",
      description: "Full service, some description, Street 125, 6005 CA",
    },
    {
      title: "Mr. Mark Smith",
      description: "No pet, consultation needed, Street 25, 4215 CA",
    },
    {
      title: "Ms. Alice Brown",
      description: "Regular service, Street 150, 1234 CA",
    },
  ];

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
      showTabs={false}
      showCards={true}
      cards={cards}
      headerTitle="Team Members"
    >
      <section className="bg-secondary w-full h-full rounded-lg p-4">
        {/* Render the list component */}
        <ModalList
          items={listItems}
          title="Today's Team"
          columnsCount={7}
          headers={headers}
        />
      </section>
    </DashboardLayout>
  );
};

export default TeamMembers;
