import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { useAuth } from "../../store/auth";

export const AdminLayout = ()=>{

const {user, loading} = useAuth();

if (loading) {
        return <div>Loading...</div>;
    }

    if (!user || !user.isAdmin) {
        return <Navigate to="/" />;
    }




    return (
    <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li><NavLink to="/admin/user"><FaUser /> User</NavLink></li>
                    <li><NavLink to="/admin/contacts"><FaAddressBook /> Contacts</NavLink></li>
                    <li><NavLink to="/service"><FaServer /> Services</NavLink></li>
                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
    );
};