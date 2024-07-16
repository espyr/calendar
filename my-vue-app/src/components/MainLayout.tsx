import React from "react";
import AppBar from "./AppBar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      className="bg-custom-bg
     w-full h-full bg-cover"
    >
      <AppBar />

      {children}
    </div>
  );
};

export default MainLayout;
