import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = ()=>{

    const [loginData, setloginData] = useState({
        email:"",
        password:""
    });

    const {storeToken, API} = useAuth();
    const navigate = useNavigate();


    const handleInput=(e)=>{
        const {name, value} = e.target;
        setloginData({
            ...loginData,
            [name]:value,
        });
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
        const response = await fetch(`${API}/login`, {
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(loginData),

        });
        const res_data = await response.json();
        if(response.ok){
            toast.success("Login Successfull");
            storeToken(res_data.token);
            setloginData({email: "", password: ""});
            navigate("/");
        }
        else{
            toast.error(res_data.extraDetails? res_data.extraDetails : res_data.message);
        }
        console.log(response);
    }catch(error){
        console.log(error);
    }
    };



    return (
        <>
            <section>
                <main>
                    <div className="login-form">
                        <div className="container grid grid-two-cols">
                            <div className="login-img">
                                <img src="/images/login1.jpg" alt="login-logo" width="500px" height="550px" />
                            </div>
                            <div className="login-form">
                            <h1 className="main-heading">Login Here!</h1>
                            <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email"
                                        placeholder="Email"
                                        name="email"
                                        id="email" 
                                        value={loginData.email}
                                        onChange={handleInput}
                                        required
                                         />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input type="password"
                                        placeholder="Password"
                                        name="password"
                                        id="password" 
                                        value={loginData.password}
                                        onChange={handleInput}
                                        required
                                         />
                                    </div>
                                    <br />
                                    <div>
                                    <button type="submit" className="btn btn-login">Login</button>
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