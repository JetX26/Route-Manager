// timeTracking.ts

import { useState } from "react";

// Custom hook for time tracking
export const useTimeTracking = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [trackedTime, setTrackedTime] = useState<string>("00:00:00");

  // Function to start time tracking
  const startTrackingTime = () => {
    const currentTime = Date.now(); // Get the current timestamp
    setStartTime(currentTime); // Store the start time
    setEndTime(null); // Reset the end time if previously set
    setTrackedTime(""); // Clear previous tracked time
    console.log(
      "Time tracking started at:",
      new Date(currentTime).toLocaleTimeString()
    );
  };

  // Function to stop time tracking
  const stopTrackingTime = () => {
    if (!startTime) {
      console.log("Time tracking hasn't started yet.");
      return;
    }

    const currentTime = Date.now(); // Get the current timestamp
    setEndTime(currentTime); // Store the end time

    // Calculate total tracked time
    const elapsedTime = currentTime - startTime;
    const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    const hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    setTrackedTime(`${hours}h ${minutes}m`);

    console.log(
      "Time tracking ended at:",
      new Date(currentTime).toLocaleTimeString()
    );
  };

  return {
    startTrackingTime,
    stopTrackingTime,
    trackedTime,
  };
};
