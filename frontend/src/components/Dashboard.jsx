import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [name, setName] = useState("");
    const [token, setToken] = useState("");
    const [expire, setExpire] = useState("");

    const navigate = useNavigate();

    const refreshToken = async () => {
        try {
            const response = await axios.get("http://localhost:5000/token");
            setToken(response.data.accessToken);

            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/");
            }
        }
    };

    useEffect(() => {
        refreshToken();
    }, []);

    const axiosJWT = axios.create();

    // - Problem: JWT will problem when you send request to the API if the endpoint must be have a accessToken
    //            such as middleware checking, this can happen bcause the accessToken expire have limit 15s or 20s on the payload when the jwt token sign
    //
    // - Solution: So with `axios.interceptors` this code below it will be send request to the refreshToken endpoint before any axios request
    //           to generate a new accessToken sign when the accessToken is expire
    axiosJWT.interceptors.request.use(
        async (config) => {
            const currentDate = new Date();
            // expire here on miliseconds
            if (expire * 1000 < currentDate.getTime()) {
                const response = await axios.get("http://localhost:5000/token");
                config.headers.Authorization = `Bearer ${response.data.accessToken}`;

                setToken(response.data.accessToken);
                const decoded = jwtDecode(response.data.accessToken);
                setName(decoded.name);
                setExpire(decoded.exp);
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    const getUsers = async () => {
        const response = await axiosJWT.get("http://localhost:5000/users", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h1 className="">Welcome Back: {name}</h1>
                <button onClick={getUsers} className="button is-info">
                    Get Users
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
