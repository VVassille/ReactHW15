import { useCallback, useMemo, useState } from "react";
import UserList from "./components/UserList";

const userList = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Vasile" },
  { id: 3, name: "Maria" },
  { id: 4, name: "John" },
  { id: 5, name: "Anna" },
];

function App() {
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback((text) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase()),
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div>
      <h1>User List</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
