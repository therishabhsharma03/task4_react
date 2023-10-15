import { useState, useEffect } from "react";
import Axios from "axios";

function Dummy() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (Array.isArray(res.data.users)) {
          setUsers(res.data.users);
        } else {
          console.error("API response does not contain a 'users' array.");
        }
      })
      .catch((err) => {
        console.error("Error occurred:", err);
        // Handle the error gracefully, e.g., set an error state or show an error message.
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Profile Pic</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><img src={user.image} alt="Profile Pic" width={"20px"} /></td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dummy;
