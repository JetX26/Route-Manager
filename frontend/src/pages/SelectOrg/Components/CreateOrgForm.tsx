import { useUser } from "@clerk/clerk-react";
import React from "react";
import { useState } from "react";
import { validateOrganizationInputs } from "../../../utils/inputValidation/inputValidation";
import { useOrganizationStore } from "../../../utils/zustand";

interface ICreateOrgProps {
  options: string[];
}
const CreateOrgForm = ({ options }: ICreateOrgProps): React.ReactNode => {
  const [orgName, setOrgName] = useState<string>();
  const [orgType, setOrgType] = useState<string>();
  const [teamSize, setTeamSize] = useState<number>();
  const { createOrg } = useOrganizationStore();
  const { user } = useUser();

  const clearValues = () => {
    setOrgName("");
    setOrgType("");
    setTeamSize(parseInt(""));
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div className="my-1">
          <label className="block text-sm font-semibold text-white mb-1">
            Organization Name
          </label>
          <input
            onChange={(e) => {
              setOrgName(e.currentTarget.value);
            }}
            placeholder="Enter organization name"
            name="name"
            className="w-full px-4 py-2 rounded-lg bg-secondary text-white text-sm"
            type="text"
            value={orgName}
          />
        </div>
        <div className="my-1">
          <label className="block text-sm font-semibold text-white mb-1">
            Organization Type
          </label>
          <select
            className="w-full px-4 py-2 rounded-lg bg-secondary text-white text-sm"
            name="OrgTypes"
            id="OrgTypes"
            value={orgType}
            onChange={(e) => {
              setOrgType(e.currentTarget.value);
            }}
          >
            <option style={{ display: "none" }} label=" "></option>
            {options.map((item: string, index: number) => {
              return (
                <option key={`${item}_${index}_key`} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="my-1">
          <label className="block text-sm font-semibold text-white mb-1">
            Team Size
          </label>
          <input
            onChange={(e) => {
              setTeamSize(parseInt(e.currentTarget.value));
            }}
            placeholder="Enter size of the team"
            name="teamSize"
            className="w-full px-4 py-2 rounded-lg bg-secondary text-white text-sm"
            type="number"
            value={teamSize}
          />
        </div>
      </div>
      <div className="placeholder only"></div>
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={clearValues}
          className="bg-secondary hover:opacity-80 text-white font-semibold px-6 py-2 text-sm rounded-lg"
        >
          Clear
        </button>
        <button
          onClick={() => {
            const result = validateOrganizationInputs.safeParse({
              orgName,
              orgType,
              teamSize,
            });
            if (
              result.success &&
              orgName !== undefined &&
              orgType !== undefined &&
              user?.id !== undefined
            ) {
              createOrg(orgName, orgType, user.id);
              clearValues();
            }
            if (!result.success) {
              const errors = result.error.formErrors.fieldErrors;
              console.debug(errors.orgName, errors.orgType, errors.teamSize);
            }
          }}
          className="bg-accent hover:opacity-80 text-white font-semibold px-6 py-2 text-sm rounded-lg"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateOrgForm;
