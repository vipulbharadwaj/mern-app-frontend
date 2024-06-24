import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth"; 
import {toast} from 'react-toastify'

export const AdminUpdate =()=>{
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const { authToken, API } = useAuth(); 
    const params = useParams();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getUserData = async () => {
        try {
            const response = await fetch(`${API}/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authToken,
                },
            });

            const data = await response.json();
            console.log("User Data:", data);
            setFormData(data);

        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    const handleSubmit = async(e)=>{
      e.preventDefault();

      try {
        const response = await fetch(`${API}/users/update/${params.id}`,
          {
            method: "PATCH",
            headers:{
              "Content-Type": "application/json",
              Authorization: authToken,
            },
            body: JSON.stringify(formData),
          });

          if(response.ok){
          toast.success("Updated Successfully");
          }
          else{
            toast.error("Some error ocurred");
          }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        getUserData();
    }, []);


    return (
        <>
        <section className="section-contact">
        <div className="section-content container">
          <h1 className="main-heading">Update Profile</h1>
        </div>
        <div className="container grid grid-two-cols">
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Please Enter New name"
                  id="username"
                  required
                  value={formData.username}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please Enter New Email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Please Enter New Phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleInput}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
        </>
    )
 
};