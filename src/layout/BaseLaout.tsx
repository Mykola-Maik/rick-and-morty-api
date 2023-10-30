import { Box } from "@mui/material";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import theme from "../theme/theme";
// import { useLocation } from "react-router";

export const BaseLayout = () => {
  // const { location } = useLocation();
  // console.log(location);
  
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "360px",
          backgroundColor: "#272B33",
          color: theme.palette.textColor.white,
        }}
      >
        This is BaseLayout
      </Box>
      <Footer />
    </>
  );
};