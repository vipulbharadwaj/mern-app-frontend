import { useState, useEffect } from "react";
import {useAuth} from "../store/auth";
import { toast } from "react-toastify";

const defaultContactForm={
    username: "",
    email: "",
    message: "",
}
export const Contact = () => {
  const [formData, setformData] = useState(defaultContactForm);

  const {user, API} = useAuth();
  useEffect(() => {
    if (user) {
        setformData({
            ...formData,
            username: user.username|| '',
            email: user.email || ''
        });
    }
}, [user]);


  const handleInput = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
  
    try {
      const response = await fetch(`${API}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setformData(defaultContactForm);
        const data = await response.json();
        console.log(data);
        toast.success("Message Sent Successfully");
      } else {
        const errorData = await response.json();
        console.log("Error:", errorData);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <>
      <section className="section-contact">
        <div className="section-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img
              src="/images/about1.png"
              alt="contact-logo"
              width="500px"
              height="450px"
            />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your name"
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
                  placeholder="Enter your email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  placeholder="Type your Message"
                  value={formData.message}
                  onChange={handleInput}
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.9970501260477!2d77.63148477587501!3d28.957811975488717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65f692a04229%3A0x72dff781fe584ede!2sSubharti%20University!5e0!3m2!1sen!2sin!4v1718218195783!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer"
          ></iframe>
        </section>
      </section>
    </>
  );
};
