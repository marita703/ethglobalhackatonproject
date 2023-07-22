import React, { ReactNode } from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import { Box } from "@mui/material";
import Header from "../../containers/Home/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="sandbox">
      <Navbar />
      <Header />
      <Box sx={{ position: "relative", overflow: "hidden" }}>{children}</Box>
      <Footer />
    </main>
  );
};

export default Layout;