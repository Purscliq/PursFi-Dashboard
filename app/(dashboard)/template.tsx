"use client";
import OnboardingLayout from "@/component/layout/OnboardingLayout.tsx";
import { useProfileQuery } from "@/services/authService";

const template = ({ children }: { children: React.ReactNode }) => {
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

export default template;
