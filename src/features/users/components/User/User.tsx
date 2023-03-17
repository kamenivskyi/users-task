import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, ListItem, ListItemText, Typography } from "@mui/material";
import gsap from "gsap";

import styles from "../../styles/Users.module.css";
import { IUser } from "../../types";

interface IProps {
  item: IUser;
  fetchAlbums: (userId: number) => void;
  handleDelete: (id: number) => void;
}

export const User = ({ item, fetchAlbums, handleDelete }: IProps) => {
  let itemRef = useRef(null);

  const onDeleteClick = (id: number) => {
    if (!id) return;

    gsap
      .to(itemRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "none",
      })
      .then(() => handleDelete(id));
  };

  return (
    <ListItem
      ref={itemRef}
      secondaryAction={
        <>
          <Link to={`/posts/${item.id}`} className="mr-2">
            <Button color="primary">Posts</Button>
          </Link>
          <Button onClick={() => fetchAlbums(item.id)}>Albums</Button>
        </>
      }
      key={item.id}
    >
      <Typography noWrap component="div" className={styles.trimmedTitle}>
        <ListItemText
          primary={item.name}
          secondary={item.email ? item.email : null}
        />
      </Typography>
      <Button onClick={() => onDeleteClick(item.id)}>Delete</Button>
    </ListItem>
  );
};
