import React, { useState, useEffect, useRef } from "react";
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
    subMenu: ["Chairman Message", "Principal Message", "Mission and Vision"],
  },
  {
    label: "Academics",
    subMenu: [
      "Pre Primary",
      "Middle School",
      "Secondary School",
      "Higher Secondary",
    ],
  },
  { label: "Curriculum" },
  {
    label: "Admission",
    subMenu: ["Eligibility", "Process", "Fees"],
  },
  { label: "Gallery", path: "/gallery" },
  {
    label: "Career",
    subMenu: ["Job Openings", "Internships"],
  },
  { label: "Contact Us", path: "/contact" },
  { label: "Scholarship" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});
  const dropdownRef = useRef(null);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleSubMenu = (menuLabel) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuLabel]: !prev[menuLabel],
    }));
  };

  const closeAllSubMenus = () => {
    setOpenSubMenus({});
  };

  // Close dropdowns if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAllSubMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <ListItem
              button
              onClick={
                item.subMenu
                  ? () => toggleSubMenu(item.label)
                  : toggleDrawer(false)
              }
            >
              <ListItemText>
                {item.path ? (
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </ListItemText>
              {item.subMenu &&
                (openSubMenus[item.label] ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                ))}
            </ListItem>
            {item.subMenu && openSubMenus[item.label] && (
              <Collapse
                in={openSubMenus[item.label]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding sx={{ pl: 4 }}>
                  {item.subMenu.map((subItem, subIndex) => (
                    <ListItem button key={subIndex}>
                      <ListItemText primary={subItem} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
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
      <Toolbar ref={dropdownRef}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", p: 1 }}
        >
          <img
            src="/Img/Logo/logo.jpg"
            alt="School Logo"
            style={{ height: "66px", marginRight: "10px", borderRadius: "50%" }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Anurag
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Public School
            </Typography>
          </Box>
        </Typography>
        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {navItems.map((item, index) =>
            item.subMenu ? (
              <Box key={index} sx={{ position: "relative" }}>
                <Button
                  color="inherit"
                  onClick={() => toggleSubMenu(item.label)}
                  endIcon={
                    openSubMenus[item.label] ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )
                  }
                >
                  {item.label}
                </Button>
                {openSubMenus[item.label] && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "white",
                      boxShadow: 1,
                      zIndex: 10,
                      minWidth: "150px",
                    }}
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <Button
                        key={subIndex}
                        fullWidth
                        onClick={() => toggleSubMenu(item.label)}
                      >
                        {subItem}
                      </Button>
                    ))}
                  </Box>
                )}
              </Box>
            ) : (
              <Button
                key={index}
                color="inherit"
                component={item.path ? Link : "button"}
                to={item.path}
              >
                {item.label}
              </Button>
            )
          )}
        </Box>
        {/* Mobile Menu */}
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
