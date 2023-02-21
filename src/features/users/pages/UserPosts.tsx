import { List, ListItem, ListItemText } from "@mui/material";
import Error from "components/Error";
import Spinner from "components/Spinner";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserPostsQuery } from "../usersAPI";

export const UserPosts = () => {
  const param: any = useParams();

  const { data, isFetching, isError } = useGetUserPostsQuery(param.userId);
  return (
    <>
      {isFetching && <Spinner />}

      {isError && <Error />}

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
    </>
  );
};
