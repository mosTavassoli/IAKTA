import React, { useEffect, useState } from "react";
import { useAPI } from "../../api/API";

export const UsersList = () => {
  const { usersList, followedUsersList, setUnFollowUser, setFollowUser } =
    useAPI();
  const [isFollowed, setIsFollowed] = useState();

  useEffect(() => {
    let isFollwing = usersList.filter((o1) =>
      followedUsersList.some((o2) => o1.id === o2.id)
    ).length;

    if (isFollwing === 0) {
      setIsFollowed(false);
    } else {
      setIsFollowed(true);
    }
  }, [setIsFollowed]);

  const handleFollowUnFollow = (id) => {
    if (isFollowed) {
      setUnFollowUser(id);
    } else {
      setFollowUser(id);
    }
  };

  return (
    <section>
      <p>The List Of Users</p>
      <ul>
        {usersList.map((userList) => (
          <li key={userList.id}>
            <div>
              id: {userList.id} - name: {userList.username}
            </div>
            <div>
              <button onClick={() => handleFollowUnFollow(userList.id)}>
                {isFollowed ? `UnFollow` : `Follow`}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
