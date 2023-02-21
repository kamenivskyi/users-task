import React from "react";
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

export const UsersPage = () => {
  const { data, isFetching, isError } = useGetUsersQuery();
  const [trigger, { data: albums }] = useLazyGetUserAlbumsQuery();

  const fetchAlbums = (userId: number) => {
    trigger(userId);
  };

  return (
    <div>
      {isFetching && !isError && <Spinner />}

      {isError && <Error />}

      <List dense={false}>
        {!isError &&
          data?.map((item) => (
            <ListItem
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
              <Typography
                noWrap
                component="div"
                className={styles.trimmedTitle}
              >
                <ListItemText
                  primary={item.name}
                  secondary={item.email ? item.email : null}
                />
              </Typography>
            </ListItem>
          ))}
      </List>
      <UserAlbumsModal data={albums} />
    </div>
  );
};
