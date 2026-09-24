import { memo } from "react";

function UserList({ users }) {
  console.log("UserList render");

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default memo(UserList);
