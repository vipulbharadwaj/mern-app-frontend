import { NavLink } from "react-router-dom";
export const Error =()=>{
    return(
        <>
            <section className="error-page">
                <div className="content">
                    <h2 className="header">404</h2>
                    <h4>Sorry! Page not found</h4>
                    <p>Oops! It seems like the page you are trying to access doesn't exist or have been removed.
                    If you believe there's an issue, feel free to report.</p>
                    
                <div className="btns">
                    <NavLink to="/">Return Home</NavLink>
                    <NavLink to="/contact"> Report Issue</NavLink>
                </div>
                </div>
            </section>
        </>
    )
}