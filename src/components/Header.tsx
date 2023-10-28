import { Box, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';
import theme from "../theme/theme";
import { Logo } from "../assets/icons/Logo";
import { Background } from "../assets/icons/Background";

export const Header = () => {
  return (
    <>
      <Box 
        sx={{ 
          backgroundColor: theme.palette.bgColor.white,
          minHeight: "60px",
          display: "flex",
          alignItems: 'center',
          paddingLeft: "20px"
        }}
      >
        <NavLink to="/" style={{ maxHeight: '40px' }}>
          <Logo />
        </NavLink>
      </Box>
      <Box
        sx={{
          position: "relative",
          minHeight: "345px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Background />
        <Typography
          sx={{
            fontSize: theme.typography.h1,
          }}
        >
          The Rick and Morty API
        </Typography>
      </Box>
    </>
  );
};