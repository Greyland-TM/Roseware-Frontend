import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";

const Overview = () => {
    const ctx = useContext(AuthContext);
    console.log(ctx.isAuth);
    return (
        <div>'overview'</div>
    );
};

export default Overview;

