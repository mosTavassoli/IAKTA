import React, { useCallback, useEffect, useState } from "react";
import { useAPI } from "../../api/API";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  UserBtn,
  UserListContainer,
  UserListContent,
  UserListContentItems,
  UserListsMainContainer,
  UserListSpan,
} from "./UsersListStyled";

export const UsersList = () => {
  const axiosPrivate = useAxiosPrivate();
  const {
    usersList,
    // followedUsersList,
    setUnFollowUser,
    setFollowUser,
    // getFollowdUsers,
  } = useAPI();
  const [followedUsersList, setFollowedUsersList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const getFollowdUsers = async () => {
    await axiosPrivate
      .get("followedUsers")
      .then((response) => {
        setFollowedUsersList(response.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/login", { state: { from: location }, replace: true });
      });
  };

  useEffect(() => {
    getFollowdUsers();
    console.log(followedUsersList);
    console.log(usersList);
  }, []);

  const handleFollowUnFollow = async (id) => {
    if (followedUsersList.find((o1) => o1.id === id)) {
      await setUnFollowUser(id);
    } else {
      await setFollowUser(id);
    }
    await getFollowdUsers();
  };

  return (
    <>
      <UserListsMainContainer>
        <UserListContainer>
          <h2>The List Of Users</h2>
          <UserListContent>
            {usersList?.length ? (
              usersList.map((userList) => (
                <UserListContentItems key={userList.id}>
                  <UserListSpan>
                    id: {userList.id} - name: {userList.username}
                  </UserListSpan>

                  <UserBtn onClick={() => handleFollowUnFollow(userList.id)}>
                    {followedUsersList.find((o1) => o1.id === userList.id)
                      ? `UnFollow`
                      : `Follow`}
                  </UserBtn>
                </UserListContentItems>
              ))
            ) : (
              <p>No Users to Display</p>
            )}
          </UserListContent>
        </UserListContainer>
        <Link to="/">Home</Link>
      </UserListsMainContainer>
    </>
  );
};
