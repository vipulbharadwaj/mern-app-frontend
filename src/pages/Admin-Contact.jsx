import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

export const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  const { authToken, API } = useAuth();

  const getContactsData = async () => {
    if (!authToken) {
      console.log("Couldn't Fetch Token");
      return;
    }

    try {
      const response = await fetch(`${API}/contacts`, {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });

      const data = await response.json();
      console.log("Contacts Data:", data);
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts data:", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`${API}/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authToken,
        },
      });

      if (!response.ok) {
        console.error("Failed to delete Contact", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Deleted Contact:", data);
      setContacts((prevContacts) =>
        prevContacts.filter((contacts) => contacts._id !== id)
      );
    } catch (error) {
      console.log("Error deleting contact", error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getContactsData();
    }
  }, []);

  return (
    <>
      <section className="section-admin-users">
        <div className="container">
          <h1>Users Contact Data</h1>
        </div>
        <div className="container admin-users">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((elem, index) => (
                  <tr key={index}>
                    <td>{elem.username}</td>
                    <td>{elem.email}</td>
                    <td>{elem.message}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteContact(elem._id);
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
                    No contacts found
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
