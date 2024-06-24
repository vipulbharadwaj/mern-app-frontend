import { useContext, useState } from "react";
import { useAuth } from "../store/auth";
export const Register = ()=>{

    const [formData, setformData] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const {storeToken, API} = useAuth();

    const handleInput=(e)=>{
        const {name, value} = e.target;
        setformData({
            ...formData,
            [name]:value,
        });

    }

    const  handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(formData);
        try{
        const response = await fetch(`${API}/register`, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData),
        });

        const res_data = await response.json();
        console.log("Response from server", res_data.extraDetails);
        if(response.ok){
            storeToken(res_data.token);
            setformData({username: "", email: "", phone: "", password: ""});
            toast.success("Registeration Successfull");
        }
        else{
            toast.error(res_data.extraDetails? res_data.extraDetails : res_data.message);
        }
        
        console.log(response);
    }catch (error) {
        console.log("register", error);
    }
    };


    return(
        <>
            <section>
                <main>
                    <div className="section-registeration">
                        <div className="container grid grid-two-cols">
                        <div className="registeration-img">
                            <img src="/images/about1.png" alt="Registeration-logo" width="550" height="480" />
                        </div>
                        <div className="registeration-form">
                            <h1 className="main-heading"> Register Here!</h1>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder="Username"
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
                                        placeholder="Email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        id="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        id="password"
                                        required
                                        value={formData.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <br />
                                <div>
                                <button type="submit" className="btn btn-submit">Register Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </main>
            </section>
        </>
    )
};