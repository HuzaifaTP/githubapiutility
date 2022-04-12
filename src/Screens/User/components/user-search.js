import React, { useState, useEffect } from "react";
import { API_search } from "../../../api/index";

function UserSearch(props) {
  const [userData, getUserData] = useState();
  console.log("TRIGGERED");

  useEffect(() => {
    const fetchUserStats = async () => {
      console.log("user-search",props.username)
      const res = await API_search.get(
        `/users?q=${props.username}+repos:%3E42+followers:%3E1000`
      );
      getUserData(res);

      console.log(userData);
    };
    fetchUserStats();
  }, [props.username]);

  return <>INSERT REPO INFO OF USER HERE</>;
}

export default UserSearch;
