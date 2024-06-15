"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import ButtonComponent from "./Button";
import { NAV_LINKS } from "@/constants";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <div className="flex flex-col justify-between gap-4 items-center">
          {NAV_LINKS.map((link) => (
            <div key={link.key}>
              <Link href={link.href} className="hover:font-bold text-slate-600">
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </List>
      <Divider />
      <List>
        <ButtonComponent
          label="LogIn"
          icon="/user.svg"
          colors="border text-white bg-slate-900 px-4 py-2 text-center items-center"
        />
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} className=" flex flex-col items-center text-center">
        {DrawerList}
      </Drawer>
    </div>
  );
}
