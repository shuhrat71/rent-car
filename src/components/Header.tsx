"use client";
import React, { useState } from "react";
import {
  HeaderTitle,
  HeaderWtapper,
  SearchInputWrapper,
  SettingIconBox,
  SettingsWrapper,
} from "@/styles/ HeaderStyles";
import Menu from "@mui/material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
const settings = ["Profile", "Logout"];
export default function Header() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <HeaderWtapper>
      <Container maxWidth="xl">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} gap={7} alignItems={"center"}>
            <HeaderTitle>
              <Typography variant="body1">Rent Car</Typography>
            </HeaderTitle>
            <SearchInputWrapper>
              <SearchIcon
                sx={{
                  color: "#3D5278",
                }}
              />
              <input type="text" placeholder="Search something here" />
            </SearchInputWrapper>
          </Box>
          <Box>
            <SettingsWrapper>
              <SettingIconBox>
                <FavoriteIcon />
              </SettingIconBox>
              <SettingIconBox>
                <NotificationsIcon />
              </SettingIconBox>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                      sx={{
                        width: "55px",
                        height: "55px",
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </SettingsWrapper>
          </Box>
        </Box>
      </Container>
    </HeaderWtapper>
  );
}
