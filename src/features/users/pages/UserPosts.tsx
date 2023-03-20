import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import Error from "components/Error";
import Spinner from "components/Spinner";
import { useParams } from "react-router-dom";
import { useGetUserPostsQuery } from "../usersAPI";
import { useAnimatedList } from "hooks";

const postClass = "user-posts";

export const UserPosts = () => {
  const param: any = useParams();

  const { data, isFetching, isError } = useGetUserPostsQuery(param.userId);

  useAnimatedList(data, postClass);

  return (
    <>
      {isFetching && <Spinner />}

      {isError && <Error />}

      <List dense={false}>
        {data?.map((item, idx) => (
          <ListItem className={postClass} key={item.id}>
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
