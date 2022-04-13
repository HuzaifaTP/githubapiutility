import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material";
import { Box } from "@mui/system";
import { API_fetchUsers } from "../../api";
import { v4 as uuidv4 } from "uuid";
import UserSearch from "./components/user-search";

function User() {
  const [users, setUsers] = useState([]);
  const [field, setTextField] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    let arr = [];
    const fetchUsers = async () => {
      const res = await API_fetchUsers.get("/users");
      res.data.map((loginName) => {
        arr.push(loginName.login);
      });
      setUsers(arr);
    };
    // console.log(users);
    fetchUsers();
  }, []);

  // console.log(user);

  return (
    <Stack
      sx={{
        width: 400,
        margin: "auto",
      }}
    >
      <Autocomplete
        id="user_search"
        getOptionLabel={(users) => `${users}`}
        options={users}
        sx={{ width: 400 }}
        isOptionEqualToValue={(option, value) => option.users === value.users}
        noOptionsText={"No user exists"}
        renderOption={(props, users) => (
          <Box component="li" {...props} key={uuidv4()}>
            {users}
          </Box>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Search for a Github user" />
        )}
        onChange={(event, value) => {
          setTextField(value);
        }}
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setUser(field)}
      >
        Search
      </button>
      {<UserSearch username={user} />}
    </Stack>
  );
}

export default User;
