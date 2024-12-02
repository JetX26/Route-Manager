import React from "react";
import { useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { validateProfileInputs } from "../../utils/inputValidation/inputValidation";
import { dialog } from "@tauri-apps/api";

const Profile = (): React.ReactNode => {
  const [editable, setEditable] = useState<boolean>(true);

  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();

  return (
    <DashboardLayout>
      <div className="mt-[15%] flex items-center justify-center flex-col gap-4">
        <div className=" w-[45%]">
          <p>First Name</p>
        </div>
        <input
          onChange={(e) => {
            setFirstName(e.currentTarget.value);
          }}
          placeholder="Stan"
          disabled={editable}
          name="First Name"
          className="input input-bordered w-[45%] text-neutral-950"
          type="text"
        />
        <div className=" w-[45%]">
          <p>Last Name</p>
        </div>
        <input
          onChange={(e) => {
            setLastName(e.currentTarget.value);
          }}
          placeholder="Kocev"
          disabled={editable}
          name="Last Name"
          className="input input-bordered w-[45%] text-neutral-950"
          type="text"
        />
        <div className=" w-[45%]">
          <p>Email</p>
        </div>
        <input
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          placeholder="jnasdjnnajsd@gmail.com"
          disabled={editable}
          name="Email"
          className="input input-bordered w-[45%] text-neutral-950"
          type="email"
        />
        <div className=" w-[45%]">
          <p>Phone Number</p>
        </div>
        <input
          onChange={(e) => {
            setPhoneNumber(e.currentTarget.value);
          }}
          placeholder="773.323.5152"
          disabled={editable}
          name="Phone Number"
          className="input input-bordered w-[45%] text-neutral-950"
          type="text"
        />
        <div className="flex w-[45%] gap-4">
          <button
            onClick={() => {
              setEditable(true);
              const result = validateProfileInputs.safeParse({
                firstName,
                lastName,
                email,
                phoneNumber: Number(phoneNumber),
              });

              if (!result.success) {
                const errors = result.error.formErrors.fieldErrors;
                console.log(
                  `${errors.email && errors.email} ${
                    errors.phoneNumber && errors.phoneNumber
                  }`
                );
              }
            }}
            className="btn"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditable(false);
            }}
            className="btn"
          >
            Edit
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
