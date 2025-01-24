import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import theme from "../theme/Theme";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    subMenu: [
      { label: "Chairman Message", path: "/about/chairman-message" },
      { label: "Principal Message", path: "/about/principal-message" },
      { label: "Headmistress Message", path: "/about/headmistress-message" },
      { label: "Mission and Vision", path: "/about/mission-vision" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    subMenu: [
      { label: "Pre Primary", path: "/academics/pre-primary" },
      { label: "Middle School", path: "/academics/middle-school" },
      { label: "Secondary School", path: "/academics/secondary-school" },
      { label: "Higher Secondary", path: "/academics/higher-secondary" },
    ],
  },
  { label: "Curriculum", path: "/curriculum" },
  {
    label: "Admission",
    path: "/admission",
    subMenu: [
      { label: "Admission Procedure", path: "/admission/admission-procedure" },
      { label: "Admission Form", path: "/admission/admission-form" },
      { label: "Admission Query", path: "/admission/admission-query" },
      { label: "Fee Structure", path: "/admission/fee-structure" },
    ],
  },
  { label: "Gallery", path: "/gallery" },
  {
    label: "Career",
    path: "/career",
    subMenu: [
      { label: "Job Openings", path: "/career/job-openings" },
      { label: "Recruitment", path: "/career/recruitment" },
      { label: "Staff Recruitment Form", path: "/career/staff-recruitment" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [drawerMenuState, setDrawerMenuState] = useState({});

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleMouseEnter = (menuLabel) => {
    setHoveredMenu(menuLabel);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const toggleDrawerMenu = (menuLabel) => {
    setDrawerMenuState((prevState) => ({
      ...prevState,
      [menuLabel]: !prevState[menuLabel],
    }));
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Anurag Public School
        </Typography>
        <Divider />
      </Box>
      <List>
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.subMenu ? (
              <>
                <ListItem
                  button
                  onClick={() => toggleDrawerMenu(item.label)}
                  component={Link}
                  to={item.path} // Added navigation for main menu
                >
                  <ListItemText primary={item.label} />
                  {drawerMenuState[item.label] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItem>
                <Collapse
                  in={drawerMenuState[item.label]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subMenu.map((subItem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        button
                        sx={{ pl: 4 }}
                        component={Link}
                        to={subItem.path}
                      >
                        <ListItemText primary={subItem.label} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem button component={Link} to={item.path}>
                <ListItemText primary={item.label} />
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.customBlue.main }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", p: 1 }}
        >
          <Box
            component="img"
            src="/Img/Logo/logo.jpg"
            alt="School Logo"
            sx={{
              borderRadius: "50%",
              height: {
                xs: "50px",
                sm: "60px",
                md: "66px",
              },
              marginRight: "10px",
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Anurag
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Public School
            </Typography>
          </Box>
        </Typography>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
        >
          {navItems.map((item, index) =>
            item.subMenu ? (
              <Box
                key={index}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                sx={{ position: "relative", mx: 1 }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "white",
                    backgroundColor:
                      hoveredMenu === item.label
                        ? "rgba(255, 255, 255, 0.2)"
                        : "transparent",
                  }}
                  endIcon={
                    hoveredMenu === item.label ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )
                  }
                  component={Link}
                  to={item.path} // Added navigation for main menu
                >
                  {item.label}
                </Button>
                {hoveredMenu === item.label && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "white",
                      boxShadow: 1,
                      zIndex: 10,
                      minWidth: "220px",
                      justifyContent: "flex-start",

                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          fullWidth
                          sx={{
                            textTransform: "none",
                            fontSize: "16px",
                            color: "black",
                            justifyContent: "flex-start",
                            px: 2,
                            "&:hover": {
                              // backgroundColor: "gray",
                              backgroundColor: "#ecf0f1",
                              color: theme.palette.customBlue.main,
                            },
                          }}
                        >
                          {subItem.label}
                        </Button>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>
            ) : (
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "white",
                }}
                key={index}
                component={Link}
                to={item.path}
              >
                {item.label}
              </Button>
            )
          )}
        </Box>

        {/* Mobile Navigation */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
