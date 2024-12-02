import { FC } from "react";

interface ListItem {
  columns: string[]; // Each row will be represented by an array of columns
}

interface ListProps {
  items: ListItem[];
  title?: string;
  columnsCount?: number; // Optional prop to set the expected number of columns
  headers: string[];
}

const List: FC<ListProps> = ({ items, title, columnsCount = 7, headers }) => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
      </div>

      {/* Headers */}
      <div className="grid grid-cols-7 items-center font-semibold p-4 rounded-lg hover:bg-primary transition-all mb-2 bg-primary">
        {headers.map((header, index) => (
          <span key={index} className="text-sm text-white flex rounded-lg px-4">
            {header}
          </span>
        ))}
      </div>

      <div className=" rounded-xl">
        {/* Render each list item */}
        <div className="grid grid-cols-1 gap-2">
          {items.map((item, index) => {
            // Ensure that each row has the correct number of columns
            const filledColumns = [
              ...item.columns,
              ...Array(columnsCount - item.columns.length).fill("-"), // Fill missing columns with "-"
            ];

            return (
              <div
                key={index}
                className="grid grid-cols-7  items-center p-4 rounded-lg hover:bg-primary transition-all hover:cursor-pointer duration-200"
              >
                {/* Columns */}
                {filledColumns.map((col, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-white flex rounded-lg px-4 py-2"
                  >
                    {col}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
