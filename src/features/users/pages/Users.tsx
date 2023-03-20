import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useGetUsersQuery, useLazyGetUserAlbumsQuery } from "../usersAPI";
import UserAlbumsModal from "features/users/components/UsersAlbumModal";
import Spinner from "components/Spinner";
import Error from "components/Error";
import styles from "../styles/Users.module.css";
import gsap from "gsap";
import { IUser } from "../types";
import { User } from "../components/User/User";
import { useAnimatedList } from "hooks";

const userClass = "user";

export const UsersPage = () => {
  const { data, isFetching, isError } = useGetUsersQuery();
  const [trigger, { data: albums }] = useLazyGetUserAlbumsQuery();
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = useState<IUser[]>([]);
  const listRef = useRef(null);

  useAnimatedList(items, userClass);

  const fetchAlbums = async (userId: number) => {
    await trigger(userId);
    handleOpen();
  };

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <>
      {isFetching && !isError && <Spinner />}

      {isError && <Error />}
      <List dense={false} ref={listRef}>
        {!isError &&
          items?.map((item) => (
            <div className={userClass} key={item.id}>
              <User
                item={item}
                fetchAlbums={fetchAlbums}
                handleDelete={handleDelete}
              />
            </div>
          ))}
      </List>
      <UserAlbumsModal data={albums} open={open} handleClose={handleClose} />
    </>
  );
};
