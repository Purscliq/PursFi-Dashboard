"use client";
import PasswordResetV2 from "@/component/password-reset-v2/PasswordResetV2";
import { useSearchParams } from "next/navigation";

const page = () => {
  const params = useSearchParams();
  return <PasswordResetV2 email={params.get("email") || ""} />;
};

export default page;
