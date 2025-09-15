"use client";
import Image from "next/image";
import * as React from "react";
import { getSession } from "@/components/lib/auth";
import { usePathname } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { logout } from "@/components/lib/auth";

export default function AppBar() {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="font-bold text-xl text-blue-600">
          <Image
            src="../assets/logo.svg"
            width={90}
            height={40}
            alt="Picture of the author"
          />
        </div>
        <ul className="hidden md:flex gap-12 text-gray-700">
          <li>
            <a
              href="/"
              className="hover:text-blue-600 font-semibold text-[#1D1D1D]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="hover:text-blue-600 font-semibold text-[#1D1D1D]"
            >
              Talenta
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="hover:text-blue-600 font-semibold text-[#1D1D1D]"
            >
              Klien
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="hover:text-blue-600 font-semibold text-[#1D1D1D]"
            >
              Mentor
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="hover:text-blue-600 font-semibold text-[#1D1D1D]"
            >
              Kontak
            </a>
          </li>
        </ul>
        {pathname === "/login" ? (
          <a
            href="/login"
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-700 font-semibold"
          >
            Sign Up
          </a>
        ) : (
          <>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={logout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
    </nav>
  );
}
