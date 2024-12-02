import { useUser, useClerk, UserButton } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useLayoutEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { member } from "../utils/types/BackendTypes";

// This is a valdation layer that ensures that the user has an account on our DB and redirects them to the Organization Selection page

// ** ISSUES ** //
// Create Member fires multiple times, try fixing with React Query 09/22/24

const ValidationLayer = (): React.ReactNode => {
  useQuery({
    queryKey: ["Member"],
    queryFn: () => checkForMember(),
  });

  const { user } = useUser();

  const { signOut } = useClerk();

  const navigate = useNavigate();

  // Creates a new Member
  const createMember = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/members/createMember",
        {
          firstName: user?.firstName,
          lastName: user?.lastName,
          clerkId: user?.id,
        }
      );
      if (data.success) {
        console.log(data);
        navigate("/selectOrg");
        return data.data;
      } else {
        signOut();
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  // Checks if the current user has an account, if not creates an account for the user.
  const checkForMember = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/members/findMember",
        { clerkId: user?.id }
      );
      if (data.success) {
        console.log(data);
        navigate("/selectOrg");
        return data.data;
      } else {
        return createMember();
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p>Loading...</p>
      <UserButton></UserButton>
    </div>
  );
};

export default ValidationLayer;
