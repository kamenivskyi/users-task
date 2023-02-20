import React from "react";
import { useParams } from "react-router-dom";

export const UserPosts = () => {
  const { userId } = useParams();
  console.log("userId: ", userId);

  return <div>UserPosts</div>;
};
