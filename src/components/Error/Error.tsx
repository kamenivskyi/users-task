import React from "react";
import Typography from "@mui/material/Typography";

interface IError {
  message?: string | undefined;
}
export const Error = ({ message = "Error occurred 💀" }: IError) => {
  return (
    <Typography
      variant="h6"
      align="center"
      sx={{ color: "red", padding: "20px 0" }}
    >
      {message}
    </Typography>
  );
};
