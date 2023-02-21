import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserPostsQuery } from "../usersAPI";

export const UserPosts = () => {
  const param: any = useParams();

  const { data } = useGetUserPostsQuery(param.userId);

  console.log("userId: ", data);

  return (
    <div>
      <List dense={false}>
        {data?.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.title}
              secondary={item.body ? item.body : null}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
