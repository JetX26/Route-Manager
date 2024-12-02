import { UserButton, useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrganizationStore } from "../../utils/zustand";
import { member } from "../../utils/types/BackendTypes";
import getOrgInfo from "../../utils/getOrg";
import CreateOrgForm from "./Components/CreateOrgForm";
import { OrgOptions } from "../../utils/inputValidation/inputValidation";

const SelectOrg = (): React.ReactNode => {
  const {
    data: member,
    isFetched,
    isLoading,
  } = useQuery<member>({
    queryKey: ["Member"],
  });

  const { orgs, setOrgs } = useOrganizationStore();
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    console.log(user?.id);
  });

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isFetched && !member) {
    navigate("/");
  } else {
    console.log(member);
  }

  useEffect(() => {
    member?.organizations.forEach(async (item) => {
      const org = await getOrgInfo(item);
      console.log(org?.name);
      org && setOrgs(org);
    });
    console.log(orgs);
  }, [member]);

  useEffect(() => {
    console.log(orgs);
  }, [orgs]);

  return (
    <div className="h-screen flex flex-col bg-primary text-[#fff] pb-6 overflow-hidden">
      <header className="w-full bg-primary border-b border-secondary">
        <div className="flex items-center gap-4 py-4 px-6">
          <UserButton />
          <div>
            <h3 className="text-md font-semibold">Hi {user?.fullName}</h3>
            <p className="text-xs text-gray-400">Your personal daily tasks</p>
          </div>
        </div>
      </header>

      <div className="p-6 grid grid-cols-2 gap-4">
        {/* Left Side: List organizations */}
        <div className="px-4 py-6">
          <h2 className="text-xl font-semibold text-white mb-8">
            Select Organization
          </h2>
          <ul className="rounded-md py-2">
            {orgs?.length ? (
              orgs.map((item) => (
                <li
                  key={item.id}
                  onClick={() => navigate("/routebook", { state: item.id })}
                  className="cursor-pointer bg-accent py-2 px-4 rounded-md max-w-[220px]"
                >
                  <a>{item.name}</a>
                </li>
              ))
            ) : (
              <h2 className="text-white">
                You are not part of any organizations yet
              </h2>
            )}
          </ul>
        </div>

        {/* Right Side: Form to create new organization */}
        <div className="px-4 py-6">
          <h2 className="text-lg font-semibold text-white mb-4 bg-secondary px-4 py-2 rounded-md">
            Create New Organization
          </h2>
          <CreateOrgForm options={OrgOptions} />
        </div>
      </div>
    </div>
  );
};

export default SelectOrg;
