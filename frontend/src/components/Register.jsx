import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault(); // make website not reload when submit form
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/users`, {
                name,
                email,
                password,
                confirmPassword,
            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            }
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box" onSubmit={Register}>
                                <p className="has-text-centered">{message}</p>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="******"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <label className="label">
                                        Confirm Password
                                    </label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="******"
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">
                                        Register
                                    </button>
                                    <a
                                        href="/"
                                        className="button is-fullwidth mt-4"
                                    >
                                        Login
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
