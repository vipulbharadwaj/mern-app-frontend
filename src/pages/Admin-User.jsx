import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminUser = () => {
  const { authToken, API } = useAuth();
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    if (!authToken) {
      console.error("No token found, unable to fetch users data.");
      return;
    }

    try {
      const response = await fetch(`${API}/users`, {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });
      const data = await response.json();
      console.log("Fetched data:", data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };

  const deleteUser = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure? you really want to delete this user?"
    );
    if (!isConfirmed) {
      return;
    }
    try {
      const response = await fetch(`${API}/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authToken,
        },
      });

      if (!response.ok) {
        console.error("Failed to delete user", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Deleted user:", data);

      // Update the state to remove the deleted user
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getUsersData();
    }
  }, [authToken]);

  return (
    <>
      <section className="section-admin-users">
        <div className="container">
          <h1>Users Data</h1>
        </div>
        <div className="container admin-users">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((currUser, index) => (
                  <tr key={index}>
                    <td>{currUser.username}</td>
                    <td>{currUser.email}</td>
                    <td>{currUser.phone}</td>
                    <td>
                    <Link to={`/admin/users/${currUser._id}/edit`}>
                      <button className="btn btn-primary">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteUser(currUser._id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
