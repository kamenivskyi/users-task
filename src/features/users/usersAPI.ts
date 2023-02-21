import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost, IUser } from "./types";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const usersAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "usersApi",
  endpoints: (build) => ({
    getUsers: build.query<IUser[], void>({
      query: () => "/users",
    }),
    getUserPosts: build.query<IPost[], number>({
      query: (userId: number) => ({
        url: "/posts",
        params: {
          userId,
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserPostsQuery } = usersAPI;
