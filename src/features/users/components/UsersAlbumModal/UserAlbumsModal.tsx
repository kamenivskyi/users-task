import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IAlbum } from "../../types";
import { Typography } from "@mui/material";
import styles from "./UsersAlbumsModal.module.css";

interface IUserAlbumsModalProps {
  data: IAlbum[] | undefined;
}

export const UserAlbumsModal = ({ data }: IUserAlbumsModalProps) => {
  const [items, setItems] = useState<IAlbum[] | undefined>([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setItems([]);
  };

  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <Modal
      open={!!items && !!items.length}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className={styles.usersModal} sx={{ width: 400 }}>
        <Typography variant="h5" id="parent-modal-title">
          Albums
        </Typography>
        {items &&
          items.map((item, idx) => (
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
