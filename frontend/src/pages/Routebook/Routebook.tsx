import { useEffect, useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import getOrgInfo from "../../utils/getOrg";
import List from "../../components/List/List";
import Modal from "../../components/Modal/Modal"; // Import the reusable Modal component
import Form from "../../components/Form/Form";
import { useTimeTracking } from "../../utils/timeTracking/timeTracking";
import { validateNewPoolServiceEntry } from "../../utils/inputValidation/inputValidation";

const Routebook = () => {
  const tabs = ["Start", "New Entry", "End"];
  const [activeTab, setActiveTab] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Any Validation errors from the form are stored in this array
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const { startTrackingTime, stopTrackingTime, trackedTime } =
    useTimeTracking(); // Use custom time tracking hook

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
        setIsModalOpen(true);
        break;
      case "Start":
        startTrackingTime(); // Start time tracking
        console.log("Time tracking started.");
        break;
      case "End":
        // Stop time tracking logic
        stopTrackingTime(); // Stop time tracking
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleFormSubmit = (formData: Record<string, string>) => {
    console.log("Form data submitted:", formData);
    Object.entries(formData).forEach((item, index) => {
      if(!Object.entries(validateNewPoolServiceEntry.shape)[index][1].safeParse(Number(item[1])).success){
        const errorMsg: string = `${item[0]} should be ${Object.entries(validateNewPoolServiceEntry.shape)[index][1]._def.description?.split("-")[0]}-${Object.entries(validateNewPoolServiceEntry.shape)[index][1]._def.description?.split("-")[1]}`
        setValidationErrors(prev => prev.filter((message) => message === errorMsg)[0] ? [...prev] : [...prev, `${errorMsg}`])
      } else {
        setValidationErrors(prev => {
          const copy: string[] = [...prev]
          copy.filter((message) => message.split(" ")[0] === item[0])[0] && copy.splice(copy.indexOf(item[0]), 1)
          return [...copy]
        })
      }
    })
    // Close modal after submission
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log(validationErrors)
  }, [validationErrors])

  // Example form fields for the new entry
  const formFields = [
    {
      label: "Alkalinity (ppm)",
      name: "alkalinity",
      type: "number",
      placeholder: "Enter alkalinity level",
    },
    {
      label: "Chlorine (ppm)",
      name: "chlorine",
      type: "number",
      placeholder: "Enter chlorine level",
    },
    {
      label: "PH Level",
      name: "ph",
      type: "number",
      placeholder: "Enter PH level",
    },
    {
      label: "Calcium Hardness (ppm)",
      name: "calcium",
      type: "number",
      placeholder: "Enter calcium hardness",
    },
    {
      label: "CYA (ppm)",
      name: "cya",
      type: "number",
      placeholder: "Enter CYA level",
    },
    {
      label: "Salt (ppm)",
      name: "salt",
      type: "number",
      placeholder: "Enter salt level",
    },
  ];

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
      tabs={tabs}
      showCards={true}
      cards={cards}
      activeTab={activeTab}
      onTabClick={handleTabClick}
    >
      <section className="bg-secondary w-full h-full rounded-lg p-4">
        {/* ToDo later Tracking time*/}

        {/* <div className="mt-4 text-white">
          <p>Tracked Time: {trackedTime}</p>
        </div> */}

        {/* Render the list component */}
        <List
          items={listItems}
          title="Route Management"
          columnsCount={7}
          headers={headers}
        />
      </section>

      {/* Modal for New Entry */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="New Entry"
        width="max-w-xl"
      >
        {/* Dynamic content for the modal */}
        <div>
          <p className="mb-2 text-seminbold">Add new entry details here...</p>
          {/* You could add a form or other content here */}

          <Form
            fields={formFields}
            onSubmit={handleFormSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Routebook;
