import React, { FC, FormEvent, useState } from "react";

interface FormField {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

interface FormProps {
  fields: FormField[];
  onSubmit: any;
  onCancel: () => void;
}

const Form: FC<FormProps> = ({ fields, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="grid grid-cols-2 gap-2">
        {fields.map((field) => (
          <div key={field.name} className="my-1">
            <label className="block text-sm font-semibold text-white mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-secondary text-white text-sm"
            />
          </div>
        ))}
      </div>

      {/* Form Action Buttons */}
      <div className="placeholder only"></div>
      <div className="flex justify-end space-x-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-secondary hover:opacity-80 text-white font-semibold px-6 py-2 text-sm rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-accent hover:opacity-80 text-white font-semibold px-6 py-2 text-sm rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
