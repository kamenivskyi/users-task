import React from "react";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../usersAPI";

export const UsersPage = () => {
  const { data } = useGetUsersQuery();

  return (
    <div>
      <List dense={false}>
        {data?.map((item) => (
          <ListItem
            secondaryAction={
              <>
                <Link to={`/posts/${item.id}`} className="mr-2">
                  <Button color="primary">Posts</Button>
                </Link>
                <Button>Albums</Button>
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
    </div>
  );
};
