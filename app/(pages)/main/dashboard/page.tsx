"use client";
import { useAuth } from "@/components/auth/UserContext";
import Loading from "../loading";
import DashboardBorrow from "./DashboardBorrow";
import DashboardLender from "./DashboardLender";

const page = () => {
  const { currentUser } = useAuth();

  if (currentUser.primary_role === "Borrower") {
    return <DashboardBorrow />;
  } else {
    return <DashboardLender />;
  }
};

export default page;
