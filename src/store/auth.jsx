import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    const authToken = `Bearer ${token}`;
    const API = import.meta.env.VITE_APP_URI_API;

    const storeToken = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    const isLoggedIn = !!token;

    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API}/user`, {
                method: "GET",
                headers: {
                    Authorization: authToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("User data:", data.userData);
                setUser(data.userData);
            } else {
                console.error(`Failed to fetch user: ${response.status} ${response.statusText}`);
                logout();
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            logout();
        } finally {
            setLoading(false);
        }
    };

    const getServices = async () => {
        try {
            const response = await fetch(`${API}/service`, {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Services:", data.services);
                setServices(data.services);
            } else {
                console.error(`Failed to fetch services: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error("Services error:", error);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            userAuthentication();
        } else {
            setLoading(false);
        }
        getServices();
    }, []); 

    return (
        <AuthContext.Provider value={{ authToken, isLoggedIn, storeToken, logout, user, services, loading, API }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
