import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <CircularProgress />
    </div>
  );
};
