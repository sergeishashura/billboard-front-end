import Header from "./Header";

import Box from "@mui/material/Box";

import Main from "./Main";
import { useScrollToTop } from "../../hooks/useScrollToTop";


const DashboardLayout = ({ children }) => {

  useScrollToTop();


  return (
    <>
      <Header />

      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Main>{children}</Main>
      </Box>
    </>
  );
};

export default DashboardLayout;
