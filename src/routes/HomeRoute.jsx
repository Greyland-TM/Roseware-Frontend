import React, { useContext } from "react";
import Overview from "../components/Overview";
import Landing from "../components/Landing";
import { AuthContext } from "../context/auth-context";

const Home = () => {
    const ctx = useContext(AuthContext);
    return ctx.isAuth ? <Overview /> : <Landing />;
};

export default Home;