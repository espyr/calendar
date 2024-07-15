import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-custom-bg
     w-full h-full bg-cover">
      {children}
    </div>
  );
};

export default MainLayout;
