import { useCallback, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useAxiosPrivate } from "../hooks/useAxiosPrivate";
import { api } from "./AxiosConfig";

const REGISTER_URL = "/register";

export const useAPI = () => {
  const [usersList, setUsersList] = useState([]);
  const [followedUsersList, setFollowedUsersList] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const registerUser = useCallback(async (user, pwd, email) => {
    console.log(user, pwd);
    await api
      .post(REGISTER_URL, { username: user, password: pwd, email: email })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getUsersList = useCallback(async () => {
    await axiosPrivate
      .get("listUsers")
      .then((response) => {
        let updateUsersList = [];
        updateUsersList = response.data;
        updateUsersList = updateUsersList.filter(
          (user) => user.username !== auth.user
        );
        setUsersList(updateUsersList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getFollowdUsers = useCallback(async () => {
    await axiosPrivate
      .get("followedUsers")
      .then((response) => {
        setFollowedUsersList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setUnFollowUser = useCallback(async (id) => {
    console.log(id);
    await axiosPrivate
      .delete("unFollowUser", { data: { id: id } })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setFollowUser = useCallback(async (id) => {
    await axiosPrivate
      .post("followUser", { data: { id: id } })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getUsersList();
    getFollowdUsers();
  }, []);

  return {
    registerUser,
    setUnFollowUser,
    setFollowUser,
    getUsersList,
    getFollowdUsers,
    usersList,
    followedUsersList,
  };
};
