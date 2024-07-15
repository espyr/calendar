import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-custom-bg bg-cover w-screen h-screen overflow-x-hidden justify-center flex align-middle text-center items-center">
      {children}
    </div>
  );
};

export default MainLayout;
