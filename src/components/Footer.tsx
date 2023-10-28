import { Container, Typography, Box } from "@mui/material";
import theme from "../theme/theme";
import { Circle } from "../assets/icons/Circle";
import { Incode } from "../assets/icons/Incode";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#202329",
        minWidth: "100%",
        height: '393px',
        paddingTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#9E9E9E",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: theme.typography.body2,
          textTransform: "uppercase",
          maxWidth: "236px",
          marginBottom: "18px"
        }}
      >
        performed as part of a test case for the company
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "90px",
          height: "90px",
          marginBottom: "40px"
        }}
      >
        <Circle />
        <Incode />
      </Box>
      <Box
        sx={{
          marginBottom: "27px",
          minWidth: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NavLink to="https://github.com/Mykola-Maik/rick-and-morty-api" style={{ color: "#9E9E9E", zIndex: 2 }} >
          <GitHubIcon sx={{ marginRight: 7 }} />
        </NavLink>
        <NavLink to="https://twitter.com/home" style={{ color: "#9E9E9E", zIndex: 2 }} >
          <TwitterIcon sx={{ marginRight: 7 }} />
        </NavLink>
        <NavLink to="" style={{ color: "#9E9E9E", zIndex: 2 }} >
          <FavoriteIcon />
        </NavLink>
      </Box>
      <Typography>
        {new Date().getUTCFullYear()}
      </Typography>
    </Container>
  );
};