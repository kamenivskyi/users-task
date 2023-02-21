import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IAlbum } from "../../types";
import { Typography } from "@mui/material";
import styles from "./UsersAlbumsModal.module.css";

interface IUserAlbumsModalProps {
  data: IAlbum[] | undefined;
  handleClose: () => void;
  open: boolean;
}

export const UserAlbumsModal = ({
  data,
  handleClose,
  open,
}: IUserAlbumsModalProps) => {
  return (
    <Modal
      open={open && !!data?.length}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className={styles.usersModal} sx={{ width: 400 }}>
        <Typography variant="h5" id="parent-modal-title">
          Albums
        </Typography>
        {data &&
          data.map((item, idx) => (
            <Typography
              sx={{ mt: 1, mb: 1, fontSize: 12 }}
              key={item.id}
              variant="h6"
              component="div"
            >
              {idx + 1}: {item.title}
            </Typography>
          ))}
      </Box>
    </Modal>
  );
};
