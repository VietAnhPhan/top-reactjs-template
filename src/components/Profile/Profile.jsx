import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context";

const Profile = () => {
  const [user, setUser] = useState({});
  const auth = useContext(AuthContext);
  useEffect(() => {
    async function fetchUser() {
      const id = localStorage.getItem("userId");
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "GET",

        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${auth.token}`,
        },
      });
      const result = await response.json();
      setUser(result.user);
    }
    fetchUser();
  }, [auth.token]);

  if (auth.token) {
    return (
      <>
        <p>{user.name}</p>
      </>
    );
  } else {
    return (
      <>
        <h1>This is profile page</h1>
      </>
    );
  }
};

export default Profile;
