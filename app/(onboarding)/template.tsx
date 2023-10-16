import OnboardingLayout from "@/component/layout/OnboardingLayout.tsx";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OnboardingLayout>{children}</OnboardingLayout>
    </>
  );
};

export default template;
