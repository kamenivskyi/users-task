import { Box } from "@mui/material";
import React from "react";

interface ILayout {
  children: React.ReactNode;
}
export const Layout = ({ children }: ILayout): JSX.Element => {
  const boxStyles = {
    width: "100%",
    maxWidth: 700,
    margin: "0 auto",
    bgcolor: "background.paper",
    padding: "10px",
  };

  return <Box sx={boxStyles}>{children}</Box>;
};
