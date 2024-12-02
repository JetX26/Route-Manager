import { FC, useState } from "react";
import Modal from "../Modal/Modal"; // Import the reusable modal
import List from "./List";

interface ListItem {
  columns: string[];
}

interface ListProps {
  items: ListItem[];
  title: string;
  columnsCount?: number;
  headers: string[];
}

const ModalList: FC<ListProps> = ({
  items,
  title,
  columnsCount = 7,
  headers,
}) => {
  // State to manage modal visibility and selected item
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);

  // Handle row click to open modal
  const handleRowClick = (item: ListItem) => {
    setSelectedItem(item); // Set the clicked item to state
    setIsModalOpen(true); // Open modal
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
        <span className="text-xs text-[#fff] font-semibold px-2 py-1 rounded-lg">
          12 Aug
        </span>
      </div>

      {/* Headers */}
      <div className="grid grid-cols-7 items-center font-semibold p-4 rounded-lg bg-primary mb-2">
        {headers.map((header, index) => (
          <span key={index} className="text-sm text-white flex rounded-lg px-4">
            {header}
          </span>
        ))}
      </div>

      <div className="rounded-xl">
        <div className="grid grid-cols-1 gap-2">
          {items.map((item, index) => {
            const filledColumns = [
              ...item.columns,
              ...Array(columnsCount - item.columns.length).fill("-"),
            ];

            return (
              <div
                key={index}
                className="grid grid-cols-7 items-center p-4 rounded-lg hover:bg-primary transition-all duration-200 cursor-pointer"
                onClick={() => handleRowClick(item)} // Trigger modal on row click
              >
                {filledColumns.map((col, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-white flex rounded-lg px-4 py-2 "
                  >
                    {col}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for selected item */}
      {isModalOpen && selectedItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Client History"
          width="w-[80%]"
        >
          {/* Render the modal content based on the selected item */}

          <List
            items={[selectedItem]} // Feed the selected item as a list to the List component
            columnsCount={columnsCount} // Ensure the columns count is consistent
            headers={headers} // Use the same headers or modify as needed
          />
        </Modal>
      )}
    </div>
  );
};

export default ModalList;
