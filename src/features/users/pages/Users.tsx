import React from "react";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useGetUsersQuery, useLazyGetUserAlbumsQuery } from "../usersAPI";
import UserAlbumsModal from "features/users/components/UsersAlbumModal";
import Spinner from "components/Spinner";

export const UsersPage = () => {
  const { data, isFetching } = useGetUsersQuery();
  const [trigger, { data: albums }] = useLazyGetUserAlbumsQuery();

  const fetchAlbums = (userId: number) => {
    trigger(userId);
  };

  return (
    <div>
      {isFetching && <Spinner />}
      <List dense={false}>
        {data?.map((item) => (
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
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={item.email ? item.email : null}
            />
          </ListItem>
        ))}
      </List>
      <UserAlbumsModal data={albums} />
    </div>
  );
};
