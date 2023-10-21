"use client";
import { useProfileQuery } from "@/services/authService";

const Template = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useProfileQuery({});
  return (
    <>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Template;
